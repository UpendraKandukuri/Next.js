import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-5 font-opensans pl-8">
      <div className="flex gap-2 justify-center items-center pt-5 w-full">
       
        <Image src='/logo.png' alt="logo" height={32} width={28} />
        <h1 className="font-bold w-45">Soft UI Dashboard</h1>
      </div>
      <div className="flex flex-col  gap-2">
      
        <Link href="/dashboard">
          <div className="flex items-center gap-2 hover:bg-white hover:shadow-md py-2 px-4 rounded-md w-auto text-gray-600 hover:font-bold">
            <div className="bg-white hover:bg-pink-600 rounded-md shadow-md">
             
              <Image src='/dashboard.svg' alt="dashboard" height={16} width={16} className="m-2 hover:bg-white" />
            </div>
            <h1>Dashboard</h1>
          </div>
        </Link>
        <Link href="/Tables">
          <div className="flex items-center gap-2 hover:bg-white hover:shadow-md py-2 px-4 rounded-md w-auto text-gray-600 hover:font-bold">
            <div className="bg-white hover:bg-pink-600 rounded-md shadow-md">
          
              <Image src='/tables.svg' alt="tables" height={16} width={16} className="m-2 hover:bg-white" />
            </div>
            <h1>Tables</h1>
          </div>
        </Link>
        <Link href="/Billing">
          <div className="flex items-center gap-2 hover:bg-white hover:shadow-md py-2 px-4 rounded-md w-auto text-gray-600 hover:font-bold">
            <div className="bg-white hover:bg-pink-600 rounded-md shadow-md">
             
              <Image src='/billing.svg' alt="billing" height={16} width={16} className="m-2 hover:bg-white" />
            </div>
            <h1>Billing</h1>
          </div>
        </Link>
        <div className="flex items-center gap-2 hover:bg-white hover:shadow-md py-2 px-4 rounded-md w-auto text-gray-600 hover:font-bold">
          <div className="bg-white hover:bg-pink-600 rounded-md shadow-md">
            
            <Image src='/settings.svg' alt="settings" height={16} width={16} className="m-2 hover:bg-white" />
          </div>
          <h1>RTL</h1>
        </div>
        <h1 className="font-bold text-gray-600">ACCOUNT PAGES</h1>
        <Link href="/Profile">
          <div className="flex items-center gap-2 hover:bg-white hover:shadow-md py-2 px-4 cursor-pointer rounded-md w-auto text-gray-600 hover:font-bold">
            <div className="bg-white hover:bg-pink-600 rounded-md shadow-md">
            
              <Image src='/profile.svg' alt="profile" height={16} width={16} className="m-2 hover:bg-white" />
            </div>
            <h1>Profile</h1>
          </div>
        </Link>
        <Link href="/signin">
          <div className="flex items-center gap-2 hover:bg-white hover:shadow-md py-2 px-4 rounded-md w-auto text-gray-600 hover:font-bold">
            <div className="bg-white hover:bg-pink-600 rounded-md shadow-md">
        
              <Image src='/signin.svg' alt="signin" height={16} width={16} className="m-2 hover:bg-white" />
            </div>
            <h1>Signin</h1>
          </div>
        </Link>
        <Link href="/signup">
          <div className="flex items-center gap-2 hover:bg-white hover:shadow-md py-2 px-4 rounded-md w-auto text-gray-600 hover:font-bold">
            <div className="bg-white hover:bg-pink-600 rounded-md shadow-md">
              <Image src='/signup.svg' alt="signup" height={16} width={16} className="m-2 hover:bg-white" />
            </div>
            <h1>Signup</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
