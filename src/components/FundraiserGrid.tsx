import Link from 'next/link';
import { useFundraisers } from '../context/FundraiserContext';

export default function FundraiserGrid() {
  const { fundraisers, isLoading, error } = useFundraisers();

  if (isLoading) {
    return (
      <div className="w-full py-12">
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-12">
        <div className="flex justify-center items-center">
          <div className="text-red-600">Error: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Active Fundraisers</h2>
        <Link
          href="/create-fundraiser"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
        >
          Create Fundraiser
        </Link>
      </div>
      
      {fundraisers.length === 0 ? (
        <div className="text-center text-gray-500 py-8">
          No fundraisers found. Be the first to create one!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fundraisers.map((fundraiser) => (
            <div
              key={fundraiser.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-56">
                <img
                  src={fundraiser.imageUrl}
                  alt={fundraiser.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{fundraiser.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{fundraiser.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Wallet: {fundraiser.walletAddress}
                  </span>
                  <button
                    className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-md hover:bg-indigo-200 transition-colors duration-200"
                    onClick={() => {
                      // Handle donation logic here
                      console.log('Donate to:', fundraiser.walletAddress);
                    }}
                  >
                    Donate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 