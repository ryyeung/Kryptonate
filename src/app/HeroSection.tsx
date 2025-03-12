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
    <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Hero Content */}
        <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
          <div className="space-y-4 md:space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">{subtitle}</p>
          </div>

          <div className="pt-4">
            <p className="flex items-center text-sm text-gray-500 justify-center lg:justify-start">
              <span className="bg-green-100 text-green-800 font-medium px-2.5 py-0.5 rounded-full text-xs mr-2">
                100% Fee-Free
              </span>
              Powered by Coinbase Wallet for complete transparency
            </p>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="flex-1 flex justify-center lg:justify-end w-full max-w-xl lg:max-w-none mx-auto">
          <div className="relative w-full max-w-lg">
            {/* Background decorative elements */}
            <div className="absolute top-0 -left-4 w-48 h-48 sm:w-72 sm:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-48 h-48 sm:w-72 sm:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-48 h-48 sm:w-72 sm:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

            {/* Main illustration */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 relative z-10 transform transition-transform duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                      {/* Removed Wallet icon */}
                    </div>
                    <div>
                      <h3 className="font-bold">Coinbase Wallet</h3>
                      <p className="text-sm text-gray-500">Fee-free transfer</p>
                    </div>
                  </div>
                  <span className="text-green-600 font-semibold">0% Fee</span>
                </div>

                <div className="space-y-4">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-600 h-full rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Amount</p>
                      <p className="font-bold">1.5 ETH</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">Recipient Gets</p>
                      <p className="font-bold text-green-600">1.5 ETH</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Traditional Fee</span>
                    <span className="line-through text-red-500">0.075 ETH</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Our Fee</span>
                    <span className="text-green-600 font-semibold">
                      0.00 ETH
                    </span>
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