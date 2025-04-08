import SectionHeader from "@/components/SectionHeader/SectionHeader";
import TravelCard from "@/components/UI/HomeCarousel/TravelCard";
import { travelPackages } from "@/components/UI/HomeCarousel/travelPackages";

export default async function CruiseType({ params }) {
  const cruiseType = (await params).cruiseType;
  let data = travelPackages;
  data = data.slice(0, 7);
  return (
    <>
      <SectionHeader title={cruiseType.replace(/-/g, " ")} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
        {data.map((item) => (
          <TravelCard {...item} key={item.id} />
        ))}
      </div>
    </>
  );
}
