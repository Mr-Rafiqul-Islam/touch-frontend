"use client";
import React from "react";
import BusCard from "./BusCard";
import { useSearchContext } from "@/utlis/provider/SearchProvider";
import { Trip as BusTrip } from "@/types";

export default function Trip() {
  const { data } = useSearchContext();
  // console.log(data, "Context DATA");
  const trips = data?.trips;
  // console.log(trips, "Trips from context");
  return (
    <div className="grid grid-cols-1 gap-4">
        {
            trips?.map((trip: BusTrip, index: number) => (
                <BusCard key={index} trip={trip}/>
            ))
        }
      
    </div>
  );
}
