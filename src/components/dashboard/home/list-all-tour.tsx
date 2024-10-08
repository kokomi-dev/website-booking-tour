import ItemCard from "../../components/item-component";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import { getAllTour } from "@/api/api-tour";
import { cn } from "@/lib/utils";
import { TourData } from "@/constants";

const ListAllTour = async () => {
  const { data } = await getAllTour();
  return (
    <div className={cn("w-full ")}>
      <h2 className="text-large font-bold">Khám phá Việt Nam</h2>
      <div>
        <p className="text-black_sub text-small mb-1">
          Các điểm đến đang có nhiều điều chờ đón bạn
        </p>
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {data?.map((tour: TourData) => (
              <CarouselItem
                key={tour.slug}
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <ItemCard
                  route="attractions"
                  slug={tour.slug}
                  name={tour.name}
                  images={tour.images[0]}
                  location={tour.location.detail}
                  price={tour.price[0]}
                  rating={tour.ratingsQuantity}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="w-14 h-14 left-2 bg-bg_primary_blue_sub border-none text-white" />
          <CarouselNext className="w-14 h-14 right-2 bg-bg_primary_blue_sub border-none text-white" />
        </Carousel>
      </div>
    </div>
  );
};

export default ListAllTour;
