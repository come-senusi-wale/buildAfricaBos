'use client';
import './globals.css';
import '@near-wallet-selector/modal-ui/styles.css';

import { NetworkId } from '@/config';
import { Navigation } from '@/components/navigation';
import { Footer } from "@/components/footer";
import { useInitWallet } from '@/wallets/wallet-selector';
import { useState } from 'react';

export default function RootLayout({ children }) {

  useInitWallet({ createAccessKeyFor: '', networkId: NetworkId });

  const [showMobileNav, setShowMobileNav] = useState(false)
  const NavHandler = () => {
    setShowMobileNav((current)=>!current)
  }

  return (
    <html lang="en">
      <body>
        <Navigation NavHandler = {NavHandler} />
        <div className={`${showMobileNav ? 'd-none' : ''}`}>
        {children}
        <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
