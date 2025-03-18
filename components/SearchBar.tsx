"use client";
import React, { useState } from "react";
import { DatePicker } from "./ui/datepicker";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useFetchLocations } from "@/utlis/hooks/useFetchLocations";
import { useSearchTrip } from "@/utlis/hooks/useSearchTrip";
import { format } from "date-fns";
import { useSearchContext } from "@/utlis/provider/SearchProvider";

interface searchTripvalues {
  from_location_id: number;
  to_location_id: number;
  date: string;
}
function SearchBar() {

  const [tripType, setTripType] = useState("oneWay");
  const [from, setFrom] = useState("");
  const [fromId, setFromId] = useState('');
  const [to, setTo] = useState("");
  const [toId, setToId] = useState('');
  const [journeyDate, setJourneyDate] = useState<Date | undefined>();
  const [returnDate, setReturnDate] = useState<Date | undefined>();
  const router = useRouter();

  const { data, error, isLoading } = useFetchLocations();
  const locationArray = data?.locations;

  // console.log(locationArray, "lcation from API response");

  // const locations = [
  //   { id: 1, value: "dhaka", label: "Dhaka" },
  //   { id: 2, value: "coxsbazar", label: "Cox's Bazar" },
  // ];
  const locations = locationArray?.map((loc: any) => ({
    id: loc.id,
    value: loc.name.toLowerCase().replace(/\s+/g, ""),
    label: loc.name,
  }));
  // console.log(locations);
  const { mutate, status, error: searchError } = useSearchTrip();
  const { setData } = useSearchContext();
  const handleSearch = () => {
    if (!from || !to || !journeyDate) {
      alert("Please fill in all required fields!");
      return;
    }
    const formattedFrom = from.replace(/\s+/g, "-");
    const formattedTo = to.replace(/\s+/g, "-");
    const formattedDate = format(journeyDate, "yyyy-MM-dd"); 
    router.push(`/search/${formattedFrom}/${formattedTo}/${formattedDate}`);
    
    mutate({
      from_location_id: fromId,
      to_location_id: toId,
      date: formattedDate,
    }, {
      onSuccess: (data) => {
        // console.log(data, "TRIP DATA");
        setData(data); // Store data in context
        return data;
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  return (
    <section className="bg-slate-200 py-5">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <RadioGroup
            className="flex gap-4 mb-4"
            value={tripType}
            onValueChange={setTripType}
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
          <div className="flex flex-col p-2 bg-white gap-4 xl:flex-row xl:py-4 rounded-lg xl:items-center xl:justify-around max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>From</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      className="w-full justify-between"
                    >
                      {from
                        ? locations?.find((loc: any) => loc.value === from)
                            ?.label
                        : "Select location..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Search location..." />
                      <CommandList>
                        <CommandEmpty>No location found.</CommandEmpty>
                        <CommandGroup>
                          {locations?.map((location: any) => (
                            <CommandItem
                              key={location.value}
                              onSelect={() => {
                                setFrom(location.value);
                                setFromId(location.id);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  from === location.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {location.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label>To</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      className="w-full justify-between"
                    >
                      {to
                        ? locations?.find((loc: any) => loc.value === to)?.label
                        : "Select location..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Search location..." />
                      <CommandList>
                        <CommandEmpty>No location found.</CommandEmpty>
                        <CommandGroup>
                          {locations?.map((location: any) => (
                            <CommandItem
                              key={location.value}
                              onSelect={() => {
                                setTo(location.value);
                                setToId(location.id);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  to === location.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              {location.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
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
                className="bg-primary-color text-white px-14 py-3 rounded-full hover:shadow-lg hover:shadow-[#E0115F] transition-all duration-300"
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
