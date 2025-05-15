"use client";
import React, { useState, useEffect  } from "react";
import Trip from "@/components/search/Trip";
import SearchBar from "@/components/SearchBar";
import FilterSidebar from "@/components/search/FilterSidebar";
import SortOptions from "@/components/search/SortOptions";
import FilterBtn from "@/components/search/FilterBtn";
import { useSearchContext } from "@/utlis/provider/SearchProvider";

const filterOptions = [
  "Ac",
  "Non-Ac",
  "Hanif",
  "Ena",
  "Green Line",
  "Royal Coach",
  "Golden Line",
];

interface ClientSearchResultsPageProps {
  from: string;
  to: string;
  date: string;
}

export default function ClientSearchResultsPage({
  from,
  to,
  date,
}: ClientSearchResultsPageProps) {

const { setData } = useSearchContext();
useEffect(() => {
    setData({
      fromId: from,
      toId: to,
      journeyDate: new Date(date),
    });
  }, [from, to, date, setData]);

  const initialFilters = Object.fromEntries(
    filterOptions.map((option) => [option, false])
  );
  const [filters, setFilters] = useState(initialFilters);

  const handleCheckboxChange = (id: keyof typeof initialFilters) => {
    setFilters((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleReset = () => {
    setFilters(initialFilters);
  };

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <SearchBar initialFromId={from}
        initialToId={to}
        initialDate={new Date(date)}/>
      <section className="py-1">
        <div className="search-container min-h-[450px]">
          <div className="flex">
            <FilterSidebar
              filters={filters}
              onCheckboxChange={handleCheckboxChange}
              onReset={handleReset}
            />
            <main className="flex-1 lg:p-4">
              <div className="flex justify-between">
                <SortOptions />
                <div className="flex lg:hidden text-xs">
                  <FilterBtn
                    filters={filters}
                    onCheckboxChange={handleCheckboxChange}
                    onReset={handleReset}
                  />
                </div>
              </div>
              <Trip from={from} to={to} date={date} filters={filters} />
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}