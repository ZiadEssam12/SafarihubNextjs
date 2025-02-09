import Carousel from "../Carousel/Carousel";
import CarouselButtons from "../Carousel/CarouselButtons";
import CarouselDots from "../Carousel/CarouselDots";
import TravelCard from "./TravelCard";
import { travelPackages } from "./travelPackages";

export default function TravelCarousel() {
  return (
    <div className="py-12">
      <div className="mb-12">
        <h2 className="font-bold text-3xl text-darkBlue capitalize text-center dark:text-white">
          hot travel deals
        </h2>
      </div>
      <Carousel
        CustomCard={TravelCard}
        data={travelPackages}
        CarouselButtons={CarouselButtons}
        CarouselDots={CarouselDots}
      />
    </div>
  );
}
