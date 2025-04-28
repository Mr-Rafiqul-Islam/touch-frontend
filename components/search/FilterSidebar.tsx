"use client";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterSidebarProps {
  className?: string;
  filters: Record<string, boolean>;
  onCheckboxChange: (id: string) => void;
  onReset: () => void;
}

const FilterSidebar = ({
  className,
  filters,
  onCheckboxChange,
  onReset,
}: FilterSidebarProps) => {
  const isAnyFilterChecked = Object.values(filters).some((checked) => checked);

  return (
    <aside className={cn("w-64 p-4 bg-gray-100 shadow-md lg:block hidden min-h-[450px]", className)}>
      <div className="flex justify-between">
        <h3 className="font-bold text-xl mb-4">Filters</h3>
        <Button
          variant="outline"
          className="!border-0 !bg-transparent text-primary-color"
          size="sm"
          disabled={!isAnyFilterChecked}
          onClick={onReset}
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
              id="Ac"
              checked={filters.Ac}
              onCheckedChange={() => onCheckboxChange("Ac")}
              className="data-[state=checked]:bg-primary-color data-[state=checked]:border-primary-color"
            />
            <Label htmlFor="Ac" className="cursor-pointer">Ac</Label>
          </p>
          <p className="flex gap-2 items-center">
            <Checkbox
              id="Non-Ac"
              checked={filters["Non-Ac"]}
              onCheckedChange={() => onCheckboxChange("Non-Ac")}
              className="data-[state=checked]:bg-primary-color data-[state=checked]:border-primary-color"
            />
            <Label htmlFor="Non-Ac" className="cursor-pointer">Non-Ac</Label>
          </p>
        </div>

        {/* Bus Company */}
        <div className="flex flex-col gap-2">
          <h5 className="uppercase text-primary-color font-semibold">Bus Company</h5>
          {["Hanif", "Ena", "Green Line", "Royal Coach", "Golden Line"].map((bus) => (
            <p key={bus} className="flex gap-2 items-center">
              <Checkbox
                id={bus}
                checked={filters[bus]}
                onCheckedChange={() => onCheckboxChange(bus)}
                className="data-[state=checked]:bg-primary-color data-[state=checked]:border-primary-color"
              />
              <Label htmlFor={bus} className="cursor-pointer capitalize">
                {bus}
              </Label>
            </p>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;