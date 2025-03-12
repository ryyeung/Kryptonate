import React from "react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  donorCTA?: string;
  recipientCTA?: string;
  onDonorClick?: () => void;
  onRecipientClick?: () => void;
}

const HeroSection = ({
  title = "Fee-Free Crypto Donations",
  subtitle = "Support causes you care about with 100% of your donation going directly to recipients. No platform fees, no hidden costs.",
  donorCTA = "Make a Donation",
  recipientCTA = "Become a Recipient",
  onDonorClick = () => {},
  onRecipientClick = () => {},
}: HeroSectionProps) => {
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 py-8 sm:py-12 md:py-16 px-3 sm:px-4 lg:px-6">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
        {/* Hero Content */}
        <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
              {title}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">{subtitle}</p>
          </div>

          {/* <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <button
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 px-4 rounded-md cursor-pointer transition-colors duration-200 text-sm"
              onClick={onDonorClick}
            >
              {donorCTA}
            </button>
            <button
              className="inline-flex items-center justify-center border border-blue-600 text-blue-600 hover:bg-blue-50 py-1.5 px-4 rounded-md cursor-pointer transition-colors duration-200 text-sm"
              onClick={onRecipientClick}
            >
              {recipientCTA}
            </button>
          </div> */}

          <div className="pt-3">
            <p className="flex items-center text-xs text-gray-500 justify-center lg:justify-start">
              <span className="bg-green-100 text-green-800 font-medium px-2 py-0.5 rounded-full text-xs mr-2">
                100% Fee-Free
              </span>
              Powered by Coinbase Wallet for complete transparency
            </p>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="flex-1 flex justify-center lg:justify-end w-full max-w-lg lg:max-w-none mx-auto">
          <div className="relative w-full max-w-md">
            {/* Background decorative elements */}
            <div className="absolute top-0 -left-4 w-32 h-32 sm:w-48 sm:h-48 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-32 h-32 sm:w-48 sm:h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-32 h-32 sm:w-48 sm:h-48 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

            {/* Main illustration */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 md:p-6 relative z-10 transform transition-transform duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                      {/* Removed Wallet icon */}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm">Coinbase Wallet</h3>
                      <p className="text-xs text-gray-500">Fee-free transfer</p>
                    </div>
                  </div>
                  <span className="text-green-600 font-semibold text-sm">0% Fee</span>
                </div>

                <div className="space-y-3">
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-600 h-full rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 p-2 rounded-md">
                      <p className="text-xs text-gray-500">Amount</p>
                      <p className="font-bold text-sm">1.5 ETH</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-md">
                      <p className="text-xs text-gray-500">Recipient Gets</p>
                      <p className="font-bold text-green-600 text-sm">1.5 ETH</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">Traditional Fee</span>
                    <span className="line-through text-red-500">0.075 ETH</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">Our Fee</span>
                    <span className="text-green-600 font-semibold">0.00 ETH</span>
                  </div>
                </div>
              </div>

              {/* Connection lines */}
              <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 hidden lg:block">
                <svg
                  width="80"
                  height="30"
                  viewBox="0 0 80 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 15H75"
                    stroke="#CBD5E0"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  <circle cx="75" cy="15" r="5" fill="#3B82F6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;