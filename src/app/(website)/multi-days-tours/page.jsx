import { travelPackages } from "@/components/UI/HomeCarousel/travelPackages";
import ToursListings from "@/components/UI/ToursListings/ToursListings";

export default function MultiDaysTours() {
  return <ToursListings data={travelPackages} place="Multi Days Tours" />;
}
