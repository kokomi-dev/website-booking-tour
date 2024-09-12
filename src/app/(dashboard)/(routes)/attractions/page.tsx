import Intro from "@/components/dashboard/home/intro";
import ListTrendingTour from "@/components/dashboard/home/list-trending-tour";
import ListAllTour from "@/components/dashboard/home/list-all-tour";
import Search from "@/components/dashboard/home/search";
import { Button } from "@/components/ui/button";
import bannerSearch from "@/assets/images/banner.jpg";
import { cn } from "@/lib/utils";
import Banner from "@/components/dashboard/banner";
const HomePage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      <Banner image={bannerSearch}>
        <Search
          page="attractions"
          currentValue=""
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </Banner>
      <Intro />
      <div
        className={cn(
          "w-full h-full py-20 bg-fixed bg-no-repeat bg-cover bg-[url('../assets/images/banner2.jpg')]",
          "lg:py-0"
        )}
      >
        <div className={cn("w-full p-4 text-white", "lg:p-10")}>
          <h1 className="title_Page  !mb-2 text-yellow_main font-bold">
            Ưu đãi
          </h1>
          <p className="mb-2">
            Khuyến mãi giảm giá đặc biệt dành riêng cho bạn
          </p>
          <div className="w-full h-auto flex items-center justify-between bg-white p-4 text-black_sub rounded-md">
            <div className="w-full">
              <h4 className="w-full text-black_main">
                Vi vu tận hưởng không khí mùa hè cùng các địa điểm du lịch nổi
                tiếng của chúng tôi
              </h4>
              <p className="text-black_sub">
                Hãy trải nghiệm nó một cách trọn vẹn
              </p>
              <Button className="bg-bg_primary_main text-white mt-2 hover:bg-bg_primary_active ">
                Khám phá bây giờ
              </Button>
            </div>
          </div>
        </div>
        <h3 className={cn("p-5 text-white underline hidden  ", " lg:block")}>
          Chỉ cần đăng nhập tài khoản, bạn sẽ sở hữu cho mình nhiều ưu đãi và
          chương trình tri ân cho những khách hàng mới đặc biệt ưu đãi!
        </h3>
      </div>
      <div className={cn("w-full")}>
        {/* list tour in VN */}
        <ListAllTour />
        {/* list tour trending */}
        <ListTrendingTour />
      </div>
    </div>
  );
};

export default HomePage;