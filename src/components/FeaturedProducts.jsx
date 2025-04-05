import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const NewArrivals = ({heading, products}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

 

  return (
    <div className="w-[90%] mx-auto mt-12 relative">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          {heading || "New Arrivals"}
        </h2>

        {/* View All Button - Top Right */}
        <Link
          to="/new-arrivals"
          className="text-gray-800 underline hover:text-gray-600 transition"
        >
          View All Products
        </Link>
      </div>

      {/* Carousel */}
      <Slider {...settings}>
        {products.map((item) => (
          <div key={item.id} className="px-2">
            {/* Wrap Card inside Link for Navigation */}
            <Link to={`/product/${item.id}`}>
              <div className="relative group cursor-pointer">
                <Card className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform group-hover:shadow-xl group-hover:scale-105">
                  {/* Image with Overlay */}
                  <div className="relative">
                    <CardMedia
                      component="img"
                      image={item.img}
                      alt={item.name}
                      className="w-full h-64 object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <CardContent className="absolute bottom-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Typography
                      variant="h6"
                      className="text-white font-semibold"
                    >
                      {item.name}
                    </Typography>
                    <Typography variant="body2" className="text-gray-200">
                      {item.price}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrivals;
