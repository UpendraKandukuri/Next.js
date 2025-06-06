
import Linechart from './LineChart';
import Image from 'next/image';


const Graphs = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full sm:gap-4 space-y-5 sm:space-y-0 items-stretch">
      <div className="hidden sm:flex flex-col flex-[3] border border-gray-300 rounded-3xl p-4 space-y-5">
        <div>
          <Linechart />
        </div>
        <div className="flex justify-between mb-2">
          <div className="flex space-x-2">
            <div className="border border-gray-300 rounded-3xl px-4 flex space-x-3 items-center">
              <h1 className="font-bold font-plus text-gray-700">
                Download Report
              </h1>
               <Image src='/download.svg' alt="search" width={28} height={40} />
            </div>
            <div className="flex space-x-2 my-1">
              <div className="bg-green-100 rounded-3xl p-2">
                <h1 className="font-semibold text-green-600">+8.8%</h1>
              </div>
              <div className="bg-gray-100 rounded-3xl flex items-center px-2">
                <h1 className="font-semibold">All Time High</h1>
              </div>
            </div>
          </div>
          <div className="flex space-x-1 items-baseline-last mr-3">
            <h1 className="font-semibold text-4xl">98.78%</h1>
            <h1 className="text-xl">Total Sales</h1>
          </div>
        </div>
      </div>
      <div className="sm:hidden border border-gray-400 rounded-3xl p-4">
        <div className='h-50 w-full'>
          <Linechart />
        </div>
        <div className="flex flex-col space-y-3">
          <div className="flex space-x-3">
            <div className="bg-green-100 rounded-3xl px-2 py-1">
              <h1 className="font-plus font-semibold text-green-600">+8.8%</h1>
            </div>
            <div className="bg-gray-100 rounded-3xl px-2 py-1">
              <h1 className="font-plus">All Time High</h1>
            </div>
          </div>
          <div className="flex items-baseline-last pb-2">
            <h1 className="font-plus font-bold text-4xl">98.78%</h1>
            <h1 className="font-plus font-semibold text-xl text-gray-700">
              Total Sales
            </h1>
          </div>
          <div className="border border-gray-300 rounded-3xl px-4 flex space-x-3 items-center py-1">
            <h1 className="font-bold font-plus text-gray-700">
              Download Report
            </h1>
        
             <Image src='/download.svg' alt="search" width={28} height={40} />
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-[1] border border-gray-400 md:overflow-x-auto rounded-3xl py-4 px-10 sm:px-2 justify-around">
        <div className="flex flex-col space-y-1">
          <div>
            <h1 className="text-3xl sm:text-2xl text-gray-800 font-medium font-plus">
              Total Visitors
            </h1>
          </div>
          <div className="flex justify-between space-x-0.5">
            <div className="flex">
              <div className="flex items-baseline-last pb-1">
                <h1 className="font-plus font-bold text-3xl">4,818</h1>
              </div>
              <div className="flex items-baseline-last pb-1 text-xl sm:space-x-0.5 space-x-1">
          
                 <Image src='/trend.svg' alt="search" width={20} height={12} />
                <h1 className="font-plus font-bold sm:font-medium text-green-600 ">
                  44.2%
                </h1>
              </div>
            </div>
            <div className="bg-gray-100 flex items-center sm:p-1 p-2 rounded-full">
         
               <Image src='/eye.svg' alt="eye" width={32} height={32} />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div>
            <h1 className="text-3xl sm:text-2xl text-gray-800 font-medium font-plus">
              Engagement Rate
            </h1>
          </div>
          <div className="flex justify-between space-x-0.5">
            <div className="flex">
              <div className="flex items-baseline-last pb-1">
                <h1 className="font-plus font-bold text-3xl">118,818</h1>
              </div>
              <div className="flex items-baseline-last pb-1 text-xl sm:space-x-0.5 space-x-1">
              
                 <Image src='/trenddown.svg' alt="search" width={20} height={12} />
                <h1 className="font-plus font-bold sm:font-medium text-red-600 ">
                  2.8%
                </h1>
              </div>
            </div>
            <div className="bg-gray-100 flex items-center sm:p-1 p-2 rounded-full">
            
               <Image src='/lamp.svg' alt="search" width={32} height={32} />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <div>
            <h1 className="text-3xl sm:text-2xl text-gray-800 font-medium font-plus">
              Conversion Rate
            </h1>
          </div>
          <div className="flex justify-between space-x-0.5">
            <div className="flex">
              <div className="flex items-baseline-last pb-1">
                <h1 className="font-plus font-bold text-3xl">12,158,187</h1>
              </div>
              <div className="flex items-baseline-last pb-1 text-xl sm:space-x-0.5 space-x-1">
             
                 <Image src='/trend.svg' alt="search" width={20} height={12} />
                <h1 className="font-plus font-bold sm:font-medium text-green-600 ">
                  8%
                </h1>
              </div>
            </div>
            <div className="bg-gray-100 flex items-center sm:p-1 p-2 rounded-full">
             
               <Image src='/lightning.svg' alt="lightning" width={32} height={32} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graphs;
