import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
    onClick={onClick}
  >
    <ChevronRight className="text-gray-800" fontSize="large" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
    onClick={onClick}
  >
    <ChevronLeft className="text-gray-800" fontSize="large" />
  </button>
);

const BannerCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  // Banner Images
  const banners = [
    { img: "/images/mens.png", alt: "Sale Banner 1" },
    { img: "/images/women.png", alt: "Sale Banner 2" },
    { img: "/images/shooes.png", alt: "Sale Banner 3" },
    { img: "/images/shooes1.png", alt: "Sale Banner 4" },
    { img: "/images/mens2.png", alt: "Sale Banner 5" },
    { img: "/images/women2.png", alt: "Sale Banner 6" },
  ];

  return (
    <div className="relative mx-auto mt-22 w-[90%]">
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} className="px-2">
            <img
              src={banner.img}
              alt={banner.alt}
              className="w-full h-[200px] object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;
