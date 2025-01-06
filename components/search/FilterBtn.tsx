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
              <div className="flex justify-between mt-4">
                <h3 className="font-bold text-xl mb-4">Filters</h3>
                <Button
                  variant={"outline"}
                  className="border border-primary-color text-primary-color"
                  size={"sm"}
                >
                  Reset
                </Button>
              </div>
            </SheetTitle>
          </SheetHeader>

          {/* Add filter options like price, airline, duration */}
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h5 className="uppercase text-primary-color font-semibold">
                Bus Type
              </h5>
              <p className="flex gap-2 items-center">
                <Checkbox id="ac" />{" "}
                <Label htmlFor="ac" className="cursor-pointer">
                  AC
                </Label>
              </p>
              <p className="flex gap-2 items-center">
                <Checkbox id="nonAc" />
                <Label htmlFor="nonAc" className="cursor-pointer">
                  Non AC
                </Label>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h5 className="uppercase text-primary-color font-semibold">
                bus company
              </h5>
              <p className="flex gap-2 items-center">
                <Checkbox id="Hanif" />{" "}
                <Label htmlFor="Hanif" className="cursor-pointer capitalize">
                  Hanif
                </Label>
              </p>
              <p className="flex gap-2 items-center">
                <Checkbox id="Ena" />
                <Label htmlFor="Ena" className="cursor-pointer capitalize">
                  Ena
                </Label>
              </p>
              <p className="flex gap-2 items-center">
                <Checkbox id="greenLine" />{" "}
                <Label
                  htmlFor="greenLine"
                  className="cursor-pointer capitalize"
                >
                  Green Line
                </Label>
              </p>
              <p className="flex gap-2 items-center">
                <Checkbox id="royalCoach" />
                <Label
                  htmlFor="royalCoach"
                  className="cursor-pointer capitalize"
                >
                  Royal Coach
                </Label>
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default FilterBtn;
