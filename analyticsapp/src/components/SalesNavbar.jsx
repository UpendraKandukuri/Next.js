
import Image from "next/image";

const SalesNavbar = () => {

  return (
    <div className="bg-gray-100">
      <div className="sm:hidden border-b-gray-200 h-auto flex justify-center items-center pt-5 pb-5 pl-4 pr-2 space-x-2">
        <div className="w-full flex items-center space-x-2">
          <div className="h-15 w-15 bg-indigo-400 rounded-3xl flex justify-center items-center">
            <Image src='/vector.svg' alt="vector" height={120} width={120} />
          </div>
          <h1 className="text-2xl font-bold font-plus">Slothui</h1>
        </div>
        <div className="mr-3">
          <Image src='/hamburger.svg' alt="hamburger" height={40} width={40} />
        </div>
      </div>
      <div className="border-b-gray-500 h-auto flex flex-col sm:flex-row sm:space-y-0 space-y-3 justify-between pt-5 pb-5 sm:px-3 px-1 w-full">
        <div className="flex flex-col justify-start ml-2">
          <h1 className="font-plus font-bold sm:text-3xl text-2xl">
            Sales Overview
          </h1>
          <h3>Your brief overview of your sales worldwide.</h3>
        </div>
        <div className="flex sm:justify-center sm:items-center space-x-3 sm:pl-0 pl-2">
          <div className="border border-gray-300 rounded-3xl w-auto flex justify-center items-center space-x-2 px-4 py-2">
            <h1>Filter</h1>
          </div>
          <div className="border border-gray-300 bg-blue-600 text-white rounded-3xl w-auto flex  justify-center items-center space-x-3 px-4 py-2">
            <Image src='/cloud.svg' alt="cloud" height={24} width={24} />
            <h1 className="font-bold font-plus">Export</h1>
          </div>
        </div>
      </div>
      <div className="sm:ml-4 flex flex-col sm:flex-row justify-between w-full mb-3">
        <div className="flex border border-gray-300 rounded-l-3xl rounded-r-3xl mb-3">
          <div className="flex items-center gap-2 px-3 py-1 ">
          
            <Image src='/grid.svg' alt="grid" height={20} width={20} />
            <h1>Grid View</h1>
          </div>
          <div className="flex items-center gap-2 px-3 py-1">
      
               <Image src='/list.svg' alt="list" height={20} width={20} />
            <h1>List View</h1>
          </div>
          <div className="flex items-center gap-2 px-3 py-1">
               <Image src='/column.svg' alt="column" height={20} width={20} />
            <h1>Column View</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesNavbar;

