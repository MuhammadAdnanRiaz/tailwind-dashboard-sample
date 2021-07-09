import React from "react";

export default function StatCard({ name, value, new: newName, newVal }) {
  return (
    <div className="w-full lg:w-1/4 mr-3 mb-4 lg:mb-0 ">
      <div className="h-full border  rounded shadow bg-gray-100">
        <div className="flex items-center justify-between py-3 px-4 border-b">
          <h3 className="text-lg font-heading">{name}</h3>
          <span className="py-1 px-3 text-sm text-white font-semibold bg-green-500 rounded-full">
            Monthly
          </span>
        </div>
        <div className="flex flex-col p-4">
          <h3 className="text-3xl mb-3 font-heading font-semibold">{value}</h3>
          <span>{newName}</span>
          <span className="text-green-500">{newVal}%</span>
        </div>
      </div>
    </div>
  );
}
