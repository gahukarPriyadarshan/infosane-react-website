import BannerCarousel from "../components/BannerCarousel";
import Categories from "../components/Categories";
import NewArrivals from "../components/NewArrivals";
import SummerCollection from "../components/SummerCollection";
import BestSelling from "../components/BestSelling";

const HomePage = () => {
  return (
    <div className="mt-4">
      <BannerCarousel />
      <Categories />
      <NewArrivals />
      <SummerCollection/>
      <BestSelling />
    </div>
  );
};

export default HomePage;
