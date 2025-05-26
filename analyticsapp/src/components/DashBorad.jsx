

import Image from "next/image";
import Graphs from "./Graphs";
import CustomersData from "./CustomersData";

const DashBorad = () => {
  return (
    <div className="border border-gray-300 w-full px-2 sm:px-4 space-y-5 min-h-screen">
      
      <div className="flex sm:flex-row flex-col justify-between sm:py-7 sm:px-4 w-full space-y-3 sm:space-y-0 sm:space-x-3">
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold font-plus">
            Analytic DashBoard
          </h1>
        </div>
        <div className="flex space-x-3">
          <div className="flex justify-center items-center">
            
            <Image src='/search.svg' alt="search" width={24} height={24} />
          </div>
          <div className="border border-gray-300 rounded-3xl w-auto flex justify-center items-center space-x-2 px-4 py-2">
            
             <Image src='/filter.svg' alt="search" width={24} height={24} />
            <h1 className="font-bold font-plus">Customize</h1>
          </div>
          <div className="border border-gray-300 rounded-3xl w-auto flex  justify-center items-center space-x-3 px-4 py-2">
          
             <Image src='/cloud.svg' alt="search" width={24} height={24} />
            <h1 className="font-bold font-plus">Add New</h1>
          </div>
        </div>
      </div>

    <Graphs />

    <CustomersData />

    </div>
  );
};

export default DashBorad;
