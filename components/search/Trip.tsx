"use client";
import React from "react";
import BusCard from "./BusCard";
import { useSearchTrip } from "@/utlis/hooks/useSearchTrip";
import { Trip as BusTrip } from "@/types";
import { Skeleton } from "../ui/skeleton";

interface TripProps {
  from: string;
  to: string;
  date: string;
}

export default function Trip({ from, to, date }: TripProps) {
  const { data, isLoading, error } = useSearchTrip({
    from_location_id: from,
    to_location_id: to,
    date,
  });

  const trips = data?.trips;
  if (error) {
    console.log("Error fetching trips:", error.message);
  }
  

  return (
    <div className="grid grid-cols-1 gap-4">
      {isLoading? <>
        <Skeleton className="h-28 w-full" />
        <Skeleton className="h-28 w-full" />
        <Skeleton className="h-28 w-full" />
      </> 
      : !trips ? (
        <p className="text-center text-3xl mt-5">{"No Trips Available"}</p>
      ) : (
        trips?.map((trip: BusTrip, index: number) => (
          <BusCard key={index} trip={trip} />
        ))
      )}
    </div>
  );
}
 