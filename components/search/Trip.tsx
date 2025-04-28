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
  filters: Record<string, boolean>; // newly added prop
}

export default function Trip({ from, to, date, filters }: TripProps) {
  const { data, isLoading, error } = useSearchTrip({
    from_location_id: from,
    to_location_id: to,
    date,
  });

  if (error) {
    console.log("Error fetching trips:", error.message);
  }

  let trips = data?.trips;

  // Filtering trips based on selected filters
  if (trips) {
    trips = trips.filter((trip: BusTrip) => {
      // Filter Bus Type
      const busTypeMatch =
        (filters.Ac && trip.vehicle.type.name.toLowerCase() === "ac") ||
        (filters["Non-Ac"] && trip.vehicle.type.name === "Non-Ac") ||
        (!filters.Ac && !filters["Non-Ac"]); // if none selected, allow all

      // Filter Bus Company
      const busCompanyFilters = ["Hanif", "Ena", "Green Line", "Royal Coach", "Golden Line"].filter(
        (company) => filters[company]
      );

      const busCompanyMatch =
        busCompanyFilters.length === 0 || busCompanyFilters.includes(trip.vehicle.name);

      return busTypeMatch && busCompanyMatch;
    });
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {isLoading ? (
        <>
          <Skeleton className="h-28 w-full" />
          <Skeleton className="h-28 w-full" />
          <Skeleton className="h-28 w-full" />
        </>
      ) : !trips || trips.length === 0 ? (
        <p className="text-center text-3xl mt-5">{"No Trips Available"}</p>
      ) : (
        trips.map((trip: BusTrip, index: number) => <BusCard key={index} trip={trip} />)
      )}
    </div>
  );
}