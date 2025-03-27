'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFundraisers } from '../../context/FundraiserContext';
import Link from 'next/link';
import Footer from '../../components/Footer';
import { FundraiserProvider } from '../../context/FundraiserContext';

function CreateFundraiserForm() {
  const router = useRouter();
  const { addFundraiser } = useFundraisers();
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    walletAddress: '',
    image: null as File | null,
    imagePreview: '',
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
        imagePreview: URL.createObjectURL(file),
      });
    }
  };

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload image');
    }

    const data = await response.json();
    return data.secure_url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.image) {
      alert('Please select an image');
      return;
    }

    try {
      setIsUploading(true);
      const imageUrl = await uploadImage(formData.image);

      const newFundraiser = {
        title: formData.title,
        description: formData.description,
        walletAddress: formData.walletAddress,
        imageUrl,
      };

      await addFundraiser(newFundraiser);
      router.push('/fundraisers');
    } catch (error) {
      console.error('Error creating fundraiser:', error);
      alert('Failed to create fundraiser. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Fundraiser</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            required
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Wallet Address
          </label>
          <input
            type="text"
            required
            placeholder="0x..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={formData.walletAddress}
            onChange={(e) => setFormData({ ...formData, walletAddress: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fundraiser Image
          </label>
          <input
            type="file"
            accept="image/*"
            required
            onChange={handleImageChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {formData.imagePreview && (
            <div className="mt-2">
              <img
                src={formData.imagePreview}
                alt="Preview"
                className="max-w-xs rounded-lg shadow-md"
              />
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => router.push('/fundraisers')}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isUploading}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isUploading ? 'Creating...' : 'Create Fundraiser'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function CreateFundraiserPage() {
  return (
    <div className="flex h-full w-96 max-w-full flex-col px-1 md:w-[1008px]">
      <section className="mt-6 mb-6 flex w-full flex-col md:flex-row">
        <div className="flex w-full flex-row items-center justify-between gap-2 md:gap-0">
          <Link href="/" className="font-semibold text-2xl text-indigo-600 hover:text-indigo-700 transition-colors duration-200">
            Kryptonate
          </Link>
          <div className="flex gap-3">
            <Link
              href="/fundraisers"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
            >
              Back to Fundraisers
            </Link>
            <Link
              href="/"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <div className="w-full border-b-2 border-gray-200 my-4"></div>
      
      <div className="flex-1">
        <FundraiserProvider>
          <CreateFundraiserForm />
        </FundraiserProvider>
      </div>
      
      <Footer />
    </div>
  );
} 