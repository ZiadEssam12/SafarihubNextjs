import SectionHeader from "@/components/SectionHeader/SectionHeader";
import TravelCard from "@/components/UI/HomeCarousel/TravelCard";
import { fetchToursByCategory } from "@/lib/api";

export default async function CruiseType({ params }) {
  const cruiseType = (await params).cruiseType;
  const data = await fetchToursByCategory(cruiseType);

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
