import React from "react";
import FilterSidebar from "@/components/search/FilterSidebar";
import SortOptions from "@/components/search/SortOptions";
import SearchBar from "@/components/SearchBar";
import BusCard from "@/components/search/BusCard";
import FilterBtn from "@/components/search/FilterBtn";


interface SearchParams {
  params: { from: string; to: string; date: string };
}

const SearchResultsPage = async ({ params }: SearchParams) => {
  //   const { from, to, date } = params;
  // const flights = await fetchFlights(from, to, date);

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <SearchBar />
      <section className="py-1">
        <div className="search-container">
          <div className="flex">
            <FilterSidebar />
            <main className="flex-1 lg:p-4">
              <div className="flex justify-between">
                <SortOptions />
                <div className="flex lg:hidden text-xs">
                  <FilterBtn/>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <BusCard />
                <BusCard />
                <BusCard />
                <BusCard />
                <BusCard />
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchResultsPage;
