"use client";
import React, { useState } from "react";
import { DatePicker } from "./ui/datepicker";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";

function SearchBar() {
  const [tripType, setTripType] = useState("oneWay");
  const [from, setFrom] = useState("Dhaka");
  const [to, setTo] = useState("Cox's Bazar");
  const [journeyDate, setJourneyDate] = useState<Date | undefined>();
  const [returnDate, setReturnDate] = useState<Date | undefined>();
  
  const handleSearch = () => {
    // Navigate to the dynamic search results page
    if (!from || !to || !journeyDate) {
      alert("Please fill in all required fields!");
      return;
    }
    const formattedFrom = from.replace(/\s+/g, "-"); // Replace spaces with hyphens
    const formattedTo = to.replace(/\s+/g, "-"); // Replace spaces with hyphens
    const formattedDate = journeyDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    router.push(`/search/${formattedFrom}/${formattedTo}/${formattedDate}`);
  };
  const router = useRouter();
  return (
    <section className="bg-slate-200 py-5">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* search form for bus route */}
          <RadioGroup
            className="flex gap-4 mb-4"
            value={tripType}
            onValueChange={(value) => setTripType(value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="oneWay" id="oneWay" />
              <Label htmlFor="oneWay">One Way</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="roundWay" id="roundWay" />
              <Label htmlFor="roundWay">Round Way</Label>
            </div>
          </RadioGroup>
          <div className="flex flex-col p-2 bg-white gap-4 xl:flex-row  xl:py-4 rounded-lg xl:items-center xl:justify-around max-w-5xl mx-auto">
            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>From</Label>
                <Input
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="From"
                />
              </div>
              <div>
                <Label>To</Label>
                <Input
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="To"
                />
              </div>
            </div>
            {/* Journey Date and Return Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Journey Date</Label>
                <DatePicker
                  selected={journeyDate}
                  onSelect={setJourneyDate}
                  placeholder="Pick A Date"
                  className="w-full"
                />
              </div>
              {tripType !== "oneWay" && (
                <div>
                  <Label>Return Date</Label>
                  <DatePicker
                    selected={returnDate}
                    onSelect={setReturnDate}
                    placeholder="Pick A Date"
                    className="w-full"
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <button
                className="bg-primary-color text-white px-14 py-3 rounded-full"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
