"use client";
import React, { useEffect, useState } from "react";
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
import { format } from "date-fns";
import { useSearchContext } from "@/utlis/provider/SearchProvider";

interface Location {
  id: string;
  value: string;
  label: string;
}

interface SearchBarProps {
  initialFromId?: string;
  initialToId?: string;
  initialDate?: Date;
}

function SearchBar({
  initialFromId = "",
  initialToId = "",
  initialDate,
}: SearchBarProps) {
  const router = useRouter();
  const { data: searchData, setData } = useSearchContext();

  const { fromId, toId, journeyDate } = searchData;

  const { data, error, isLoading } = useFetchLocations();
  const locationArray = data?.locations;

  // Map locations for easier lookup with explicit types
  const locations: Location[] | undefined = locationArray?.map(
    (loc: { id: number; name: string }) => ({
      id: loc.id.toString(),
      value: loc.name.toLowerCase().replace(/\s+/g, ""),
      label: loc.name,
    })
  );

  // Local state for the strings that show in the button
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [tripType, setTripType] = useState("oneWay");
  const [returnDate, setReturnDate] = useState<Date | undefined>();

  // Sync local "from" string when fromId or locations change
  useEffect(() => {
    if (locations && fromId) {
      const loc = locations.find((loc: Location) => loc.id === fromId);
      if (loc) setFrom(loc.value);
    }
  }, [fromId, locations]);

  // Sync local "to" string when toId or locations change
  useEffect(() => {
    if (locations && toId) {
      const loc = locations.find((loc: Location) => loc.id === toId);
      if (loc) setTo(loc.value);
    }
  }, [toId, locations]);

  // On mount, if initial props given and context empty, initialize context state
  useEffect(() => {
    if ((!fromId || !toId) && locations) {
      if (initialFromId) {
        const loc = locations.find((loc: Location) => loc.id === initialFromId);
        if (loc) {
          setData((prev: typeof searchData) => ({ ...prev, fromId: loc.id }));
        }
      }
      if (initialToId) {
        const loc = locations.find((loc: Location) => loc.id === initialToId);
        if (loc) {
          setData((prev: typeof searchData) => ({ ...prev, toId: loc.id }));
        }
      }
      if (initialDate) {
        setData((prev: typeof searchData) => ({
          ...prev,
          journeyDate: initialDate,
        }));
      }
    }
  }, [
    initialFromId,
    initialToId,
    initialDate,
    fromId,
    toId,
    locations,
    setData,
    searchData,
  ]);

  const handleSearch = () => {
    if (!fromId || !toId || !journeyDate) {
      alert("Please fill in all required fields!");
      return;
    }
    const formattedDate = format(journeyDate, "yyyy-MM-dd");
    router.push(`/search/${fromId}/${toId}/${formattedDate}`);
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
              {/* From */}
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
                        ? locations?.find((loc) => loc.value === from)?.label
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
                          {locations?.map((location: Location) => (
                            <CommandItem
                              key={location.value}
                              onSelect={() => {
                                setFrom(location.value);
                                setData({ ...searchData, fromId: location.id });
                              }}
                              value={location.value}
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
              {/* To */}
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
                        ? locations?.find((loc) => loc.value === to)?.label
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
                          {locations?.map((location: Location) => (
                            <CommandItem
                              key={location.value}
                              onSelect={() => {
                                setTo(location.value);
                                setData({ ...searchData, toId: location.id });
                              }}
                              value={location.value}
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
              {/* Journey Date */}
              <div>
                <Label>Journey Date</Label>
                <DatePicker
                  selected={journeyDate}
                  onSelect={(date) => setData({ ...searchData, journeyDate: date })}
                  placeholder="Pick A Date"
                  className="w-full"
                />
              </div>
              {/* Return Date only if round trip */}
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
