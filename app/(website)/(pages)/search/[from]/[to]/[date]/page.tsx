import Trip from "@/components/search/Trip";
import SearchBar from "@/components/SearchBar";
import FilterSidebar from "@/components/search/FilterSidebar";
import SortOptions from "@/components/search/SortOptions";
import FilterBtn from "@/components/search/FilterBtn";

interface SearchPageProps {
  params: {
    from: string;
    to: string;
    date: string;
  };
}

export default async function SearchResultsPage({ params }: SearchPageProps) {
  const { from, to, date } = await params;

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <SearchBar />
      <section className="py-1">
        <div className="search-container min-h-[450px]">
          <div className="flex">
            <FilterSidebar />
            <main className="flex-1 lg:p-4">
              <div className="flex justify-between">
                <SortOptions />
                <div className="flex lg:hidden text-xs">
                  <FilterBtn />
                </div>
              </div>
              <Trip from={from} to={to} date={date} />
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}

