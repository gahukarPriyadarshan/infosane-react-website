import BannerCarousel from "../components/BannerCarousel";
import Categories from "../components/Categories";
import SummerCollection from "../components/SummerCollection";
import BestSelling from "../components/BestSelling";
import ProductList from "../components/ProductList.jsx";

const HomePage = () => {
  return (
    <div className="mt-4">
      <BannerCarousel />
      <Categories />
      <ProductList />
      <SummerCollection />
      <BestSelling />
    </div>
  );
};

export default HomePage;
