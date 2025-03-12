'use client';
import Footer from 'src/components/Footer';
import TransactionWrapper from 'src/components/TransactionWrapper';
import WalletWrapper from 'src/components/WalletWrapper';
import { useAccount } from 'wagmi';
import { ONCHAINKIT_LINK } from 'src/links';
import OnchainkitSvg from 'src/svg/OnchainkitSvg';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';
import HeroSection from './HeroSection';

export default function Page() {
  const { address } = useAccount();
  //Add a header class in b/t HeroSection, Add Logo
  return (
    <div className="flex h-full w-96 max-w-full flex-col px-1 md:w-[1008px]">
       <section className="mt-6 mb-6 flex w-full flex-col md:flex-row">
      {/* <div className="border-b-15 border-gray-300 mb-4"></div> */}
      <div className="flex w-full flex-row items-center justify-between gap-2 md:gap-0">
          {/* <a
            title="Kryptonate"
            target="_blank"
            rel="noreferrer"
          >
            <OnchainkitSvg />
          </a> */}
          {/* <a
            target="_blank"
            rel="noreferrer"
            title="Kryptonate"
            className="font-semibold hover:text-indigo-600"
          >
            Kryptonate
          </a> */}
          <span className="font-semibold text-2xl text-indigo-600">Kryptonate</span>


          <div className="flex items-center gap-3">
            <SignupButton />
            {!address && <LoginButton />}
          </div>
      </div>
      </section>
      <div className="w-full border-b-2 border-gray-200 my-4"></div>
      <HeroSection />
      <div className="flex w-full flex-col items-center justify-center gap-2 px-2 py-4 md:grow">
        {address ? (
          <TransactionWrapper address={address} />
        ) : (
          <WalletWrapper
            className="w-[450px] max-w-full"
            text="Sign in to Donate"
          />
        )}
      </div>
      <Footer />
    </div>
  );
} 

// 'use client';
// import Footer from 'src/components/Footer';
// import TransactionWrapper from 'src/components/TransactionWrapper';
// import WalletWrapper from 'src/components/WalletWrapper';
// import { ONCHAINKIT_LINK } from 'src/links';
// import OnchainkitSvg from 'src/svg/OnchainkitSvg';
// import { useAccount } from 'wagmi';
// import LoginButton from '../components/LoginButton';
// import SignupButton from '../components/SignupButton';
// import HeroSection from './HeroSection';

// export default function Page() {
//   const { address } = useAccount();

//   return (
//     <div className="flex h-full w-96 max-w-full flex-col px-1 md:w-[1008px]">
//       {/* <section className="mt-6 mb-6 flex w-full flex-col md:flex-row"> */}
//         {/* <div className="flex w-full flex-row items-center justify-between gap-2 md:gap-0">
//           <a
//             href={ONCHAINKIT_LINK}
//             title="onchainkit"
//             target="_blank"
//             rel="noreferrer"
//           >
//             <OnchainkitSvg />
//           </a>
//           <div className="flex items-center gap-3">
//             <SignupButton />
//             {!address && <LoginButton />}
//           </div>
//         </div>
//       </section>
//       <section className="templateSection flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-gray-100 px-2 py-4 md:grow">
//         <div className="flex h-[450px] w-[450px] max-w-full items-center justify-center rounded-xl bg-[#030712]">
//           <div className="rounded-xl bg-[#F3F4F6] px-4 py-[11px]">
//             <p className="font-normal text-indigo-600 text-xl not-italic tracking-[-1.2px]">
//               Kryptonate
//             </p>
//           </div>
//         </div> */}
//         <HeroSection />
//         <div className="flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-gray-100 px-2 py-4 md:grow">
//           {address ? (
//             <TransactionWrapper address={address} />
//           ) : (
//             <WalletWrapper
//               className="w-[450px] max-w-full"
//               text="Sign in to transact"
//             />
//           )}
//         </div>
//       {/* </section> */}
//       <Footer />
//     </div>
//   );
// }