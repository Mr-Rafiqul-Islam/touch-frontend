import About from "@/components/About";
import Banner from "@/components/Banner";
import SearchBar from "@/components/SearchBar";


export default function Home() {
  return (
      <main className="font-[family-name:var(--font-geist-sans)]">
        <Banner/>
        <SearchBar/>
        <About/>
        
      </main>
  );
}
