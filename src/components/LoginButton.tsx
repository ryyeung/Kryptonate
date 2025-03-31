'use client';
import WalletWrapper from './WalletWrapper';

export default function LoginButton() {
  return (
    <WalletWrapper
      className="min-w-[90px]"
      text="Log into Wallet"
      withWalletAggregator={true}
    />
  );
}
