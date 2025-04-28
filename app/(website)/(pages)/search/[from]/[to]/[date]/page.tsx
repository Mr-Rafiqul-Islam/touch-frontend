import ClientSearchResultsPage from "./ClientSearchResultsPage";

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
    <ClientSearchResultsPage from={from} to={to} date={date} />
  );
}