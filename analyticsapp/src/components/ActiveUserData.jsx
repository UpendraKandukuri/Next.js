import React from "react";
import customers from "./Activites.json";
import Image from "next/image";

const ActiveUserData = () => {
  return (
    <div>
      <table>
        <thead>
          <tr className="border-b border-gray-300">
            <th className="text-left px-3 py-2 text-blue-500">Activities</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr className="border-b border-gray-300" key={customer.id}>
              <td className="px-3 py-3">
                <div className="flex items-center space-x-2">
                  <Image
                    src={customer.image}
                    alt={customer.name}
                    height={32}
                    width={32}
                  />
                  <div className="text-xs font-plus flex flex-col">
                    <span className="font-semibold">{customer.name}</span>
                    <span>
                      {customer.activity} {customer.value}
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveUserData;
