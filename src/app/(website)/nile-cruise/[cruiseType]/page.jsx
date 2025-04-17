import ToursListings from "@/components/UI/ToursListings/ToursListings";
import { fetchToursByCategory } from "@/lib/api";

export default async function CruiseType({ params }) {
  const cruiseType = (await params).cruiseType;
  const data = await fetchToursByCategory(cruiseType);

  return <ToursListings data={data} place={cruiseType.replace(/-/g, " ")} />;
}
