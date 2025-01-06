import React from "react";

const SortOptions = () => {
  return (
    <div className="mb-2">
      <label className="mr-2 text-xs ">Sort By:</label>
      <select className="border rounded-md p-2 text-xs w-[83px] md:w-[180px]">
        <option value="lowest" className="text-xs">Lowest To Highest Price</option>
        <option value="highest" className="text-xs">Highest To Lowest Price</option>
      </select>
    </div>
  );
};

export default SortOptions;
