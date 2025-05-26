'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="hidden border border-gray-300 sm:flex flex-col justify-start space-y-5 px-2 max-h-screen">
      <div className="flex gap-2 items-center pt-5">
        <div className="w-10 h-10 bg-indigo-400 rounded-3xl flex justify-center items-center">
          <Image src={"/vector.svg"} alt="vector" width={40} height={32} />
        </div>
        <h1 className="font-plus font-bold">Slothui</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search.."
          className="border border-gray-300 rounded-3xl font-semibold px-3 py-1"
        />
      </div>
      <div className="flex flex-col gap-5 px-3">
        <Link href="/dashboard">
          <div className="flex gap-2">
            <Image src={"/home.svg"} alt="home" height={40} width={32} />
            <h1 className="font-plus font-medium">Home</h1>
          </div>
        </Link>
        <Link href="/salesgraph">
          <div className="flex gap-2 ">
            <Image src={"/graph.svg"} alt="graph" height={40} width={32} />
            <h1 className="font-plus font-medium">Sales Graphs</h1>
          </div>
        </Link>
        <Link href="/vendoractivity">
          <div className="flex gap-2">
            <Image src={"/users.svg"} alt="home" height={40} width={32} />
            <h1 className="font-plus font-medium">Vendor Activity</h1>
          </div>
        </Link>
        <div className="flex gap-2 ">
          <Image src={"/cube.svg"} alt="home" height={40} width={32} />
          <h1 className="font-plus font-medium">APIs</h1>
        </div>
        <div className="flex gap-2">
          <Image src={"/subscription.svg"} alt="home" height={40} width={32} />
          <h1 className="font-plus font-medium">Subscription</h1>
        </div>
        <div className="flex gap-2 ">
          <Image src={"/settings.svg"} alt="home" height={40} width={32} />
          <h1 className="font-plus font-medium">Settings</h1>
        </div>
        <div className="flex gap-2 ">
          <Image src={"/support.svg"} alt="home" height={40} width={32} />
          <h1 className="font-plus font-medium">Help & Support</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
