import { travelPackages } from "@/components/UI/HomeCarousel/travelPackages";
import ToursListings from "@/components/UI/ToursListings/ToursListings";

export default function ShoreExcursions() {
  return <ToursListings data={travelPackages} place="Shore Excursions" />;
}
