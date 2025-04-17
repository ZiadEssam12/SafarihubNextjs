import ToursListings from "@/components/UI/ToursListings/ToursListings";
import { fetchToursByCategory } from "@/lib/api";

export default async function ShoreExcursions() {
  // Fetching travel packages data from the local file
  const data = await fetchToursByCategory("shore-excursions");

  return <ToursListings data={data} place="Shore Excursions" />;
}
