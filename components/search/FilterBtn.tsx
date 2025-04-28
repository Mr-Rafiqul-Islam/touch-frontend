import React from "react";
import { Filter } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FilterSidebar from "./FilterSidebar";

interface FilterSidebarProps {
  filters: Record<string, boolean>;
  onCheckboxChange: (id: string) => void;
  onReset: () => void;
}
function FilterBtn({ filters, onCheckboxChange, onReset }: FilterSidebarProps) {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <span className="flex gap-1">
            <Filter size="16" /> Filter
          </span>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <p className="text-sm my-3 text-gray-800">
                Select Your Filter Options
              </p>
            </SheetTitle>
          </SheetHeader>
          <FilterSidebar
            filters={filters}
            onCheckboxChange={onCheckboxChange}
            onReset={onReset}
            className="block lg:hidden w-full bg-transparent shadow-none"
          />
        </SheetContent>
      </Sheet>
    </>
  );
}

export default FilterBtn;
