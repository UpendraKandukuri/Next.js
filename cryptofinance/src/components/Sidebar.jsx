"use client" 
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";


const Sidebar = () => {
  const [walletOpen, setWalletOpen] = useState(false);

  return (
    <div className="p-3 flex flex-col space-y-3 bg-white shadow-md w-60">
      <div className="flex justify-center items-center gap-4">
        <Image src='/icon.svg' alt="icon" height={30} width={30} /> 
        <h1 className="font-plus font-bold text-2xl text-purple-900">
          Kripton
        </h1>
      </div>

      <div className="flex flex-col">
        <div className="text-gray-600 px-4 py-2 flex gap-2 items-center">
         
          <Image src='/dashboard.svg' alt="dashboard" height={20} width={24} />
          <h1>Dashboard</h1>
        </div>

        <div className="text-gray-600 px-4 py-2 flex flex-col gap-1">
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => setWalletOpen(!walletOpen)}
          >
          
            <Image src='/wallet.svg' alt="wallet" height={20} width={24} className="mt-1" />
            <h1>My Wallet</h1>
            <span className="ml-auto">{walletOpen ? "▲" : "▼"}</span>
          </div>

          {walletOpen && (
            <div className="ml-8 flex flex-col text-sm gap-1 text-purple-800">
              <Link href="/addwallet">Add New</Link>
              <Link href="/cardlist">Card List</Link>
              <Link href="/history">History</Link>
             
            </div>
          )}
        </div>

        <Link href='/transaction'>
          <div className="text-gray-600 px-4 py-2 flex gap-2 items-center">
          
            <Image src='/transcation.svg' alt="transaction" height={20} width={24} />
            <h1>Transaction</h1>
          </div>
        </Link>

        <div className="text-gray-600 px-4 py-2 flex gap-2 items-center">
               <Image src='/crypto.svg' alt="crypto" height={20} width={24} className="mt-1" />
          <h1>Crypto</h1>
        </div>

        <div className="text-gray-600 px-4 py-2 flex gap-2 items-center">
    
           <Image src='/exchange.svg' alt="exchange" height={20} width={24} className="mt-1" />
          <h1>Exchange</h1>
        </div>

        <div className="text-gray-600 px-4 py-2 flex gap-2 items-center">
         
          <Image src='/settings.svg' alt="settings" height={20} width={24} className="mt-1" />
          <h1>Settings</h1>
        </div>
      </div>
      <div>
        <Image src='/banner.svg' alt="banner" height={200} width={220}/>
      </div>
    </div>
  );
};

export default Sidebar;
