'use client';
import FundraiserGrid from '../../components/FundraiserGrid';
import Link from 'next/link';
import { FundraiserProvider } from '../../context/FundraiserContext';
import Footer from '../../components/Footer';

export default function FundraisersPage() {
  return (
    <div className="flex h-full w-96 max-w-full flex-col px-1 md:w-[1008px]">
      <section className="mt-6 mb-6 flex w-full flex-col md:flex-row">
        <div className="flex w-full flex-row items-center justify-between gap-2 md:gap-0">
          <span className="font-semibold text-2xl text-indigo-600">Kryptonate</span>
          <Link
            href="/"
            className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-md hover:bg-indigo-200 transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>
      </section>
      <div className="w-full border-b-2 border-gray-200 my-4"></div>
      
      <div className="flex-1">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">All Fundraisers</h1>
          <Link
            href="/create-fundraiser"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
          >
            Create Fundraiser
          </Link>
        </div>
        <FundraiserProvider>
          <FundraiserGrid />
        </FundraiserProvider>
      </div>
      
      <Footer />
    </div>
  );
} 