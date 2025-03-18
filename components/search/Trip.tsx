"use client";
import React from "react";
import BusCard from "./BusCard";
import { useSearchContext } from "@/utlis/provider/SearchProvider";

export default function Trip() {
  const { data } = useSearchContext();
  console.log(data, "Context DATA");
  return (
    <div className="grid grid-cols-1 gap-4">
      <BusCard />
      <BusCard />
      <BusCard />
      <BusCard />
      <BusCard />
      <BusCard />
    </div>
  );
}
