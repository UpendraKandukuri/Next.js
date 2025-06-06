"use client"

import React from "react";
import ProjectTable from "./ProjectTable";
import AuthorsData from "./AuthorsData";
import { usePathname } from "next/navigation"

const Tables = () => {
    const pathname = usePathname();
    const pathParts = pathname.split("/").filter(Boolean);

  return (
    <div className="flex flex-col gap-7 font-opensans">
      <div className="pl-5 mt-5">
        <h1>Pages / {pathParts}</h1>
        <h1 className="font-bold text-xl">Tables</h1>
      </div>
      <div className="bg-white rounded-xl shadow-xl p-4">
        <AuthorsData />
      </div>
      <div className="bg-white rounded-xl shadow-xl p-4">
        <ProjectTable showMembers={false} showStatus={true} />
      </div>
    </div>
  );
};

export default Tables;
