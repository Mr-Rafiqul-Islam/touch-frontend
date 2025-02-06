import React from "react";
import { Filter } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import FilterSidebar from "./FilterSidebar";
function FilterBtn() {
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
                <p className="text-sm my-3 text-gray-800">Select Your Filter Options</p>
                
            </SheetTitle>
          </SheetHeader>
          <FilterSidebar className="block lg:hidden w-full bg-transparent shadow-none"/>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default FilterBtn;
