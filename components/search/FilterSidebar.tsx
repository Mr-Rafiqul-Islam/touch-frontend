'use client';
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FilterSidebar = ({className}: {className?: string}) => {
  // Options for filters
  const filterOptions = [
    'ac',
    'nonAc',
    'Hanif',
    'Ena',
    'greenLine',
    'royalCoach',
  ];
  
  const initialFilters = Object.fromEntries(
    filterOptions.map((option) => [option, false])
  );
  // State to store selected filters
  const [filters, setFilters] = useState(initialFilters);

  // Check if any filter is selected
  const isAnyFilterChecked = Object.values(filters).some((checked) => checked);

  // Handle checkbox change
  const handleCheckboxChange = (id: keyof typeof filters) => {
    setFilters((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Reset all filters
  const handleReset = () => {
    setFilters({
      ac: false,
      nonAc: false,
      Hanif: false,
      Ena: false,
      greenLine: false,
      royalCoach: false,
    });
  };

  return (
    <aside className={cn("w-64 p-4 bg-gray-100 shadow-md lg:block hidden",className)}>
      <div className="flex justify-between">
        <h3 className="font-bold text-xl mb-4">Filters</h3>
        <Button
          variant="outline"
          className="!border-0 !bg-transparent text-primary-color"
          size="sm"
          disabled={!isAnyFilterChecked}
          onClick={handleReset}
        >
          Reset
        </Button>
      </div>

      {/* Filters */}
      <div className="mt-4 flex flex-col gap-4">
        {/* Bus Type */}
        <div className="flex flex-col gap-2">
          <h5 className="uppercase text-primary-color font-semibold">Bus Type</h5>
          <p className="flex gap-2 items-center">
            <Checkbox
              id="ac"
              checked={filters.ac}
              onCheckedChange={() => handleCheckboxChange("ac")}
              className="data-[state=checked]:bg-primary-color data-[state=checked]:border-primary-color"
            />
            <Label htmlFor="ac" className="cursor-pointer">AC</Label>
          </p>
          <p className="flex gap-2 items-center">
            <Checkbox
              id="nonAc"
              checked={filters.nonAc}
              onCheckedChange={() => handleCheckboxChange("nonAc")}
              className="data-[state=checked]:bg-primary-color data-[state=checked]:border-primary-color"
            />
            <Label htmlFor="nonAc" className="cursor-pointer">Non AC</Label>
          </p>
        </div>

        {/* Bus Company */}
        <div className="flex flex-col gap-2">
          <h5 className="uppercase text-primary-color font-semibold">Bus Company</h5>
          {["Hanif", "Ena", "greenLine", "royalCoach"].map((bus) => (
            <p key={bus} className="flex gap-2 items-center">
              <Checkbox
                id={bus}
                checked={filters[bus as keyof typeof filters]}
                onCheckedChange={() => handleCheckboxChange(bus as keyof typeof filters)}
                className="data-[state=checked]:bg-primary-color data-[state=checked]:border-primary-color"
              />
              <Label htmlFor={bus} className="cursor-pointer capitalize">{bus.replace(/([A-Z])/g, " $1").trim()}</Label>
            </p>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
