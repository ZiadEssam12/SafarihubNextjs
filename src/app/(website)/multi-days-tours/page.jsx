import ToursListings from "@/components/UI/ToursListings/ToursListings";
import { fetchToursByCategory } from "@/lib/api";

export default async function MultiDaysTours() {
  const data = await fetchToursByCategory("multi-days-tours");

  return <ToursListings data={data} place="Multi Days Tours" />;
}
