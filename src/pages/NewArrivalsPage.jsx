import NewArrivals from "../components/FeaturedProducts";
import { useNavigate } from "react-router-dom";

const NewArrivalsPage = () => {
  const navigate = useNavigate();

  const allNewArrivals = [
    { id: 7, img: "/images/shirt.png", name: "Men's Shirt", price: "Rs30" },
    { id: 8, img: "/images/dress.png", name: "Women's Dress", price: "$45" },
    { id: 1, img: "/images/sneakers.png", name: "Sneakers", price: "$60" },
    {
      id: 3,
      img: "/images/luxurywatch.png",
      name: "Luxury Watch",
      price: "$120",
    },
    { id: 4, img: "/images/bag.png", name: "Leather Handbag", price: "$90" },
    {
      id: 5,
      img: "/images/winterjacket.png",
      name: "Winter Jacket",
      price: "$110",
    },
    {
      id: 6,
      img: "/images/luxuryperfume.png",
      name: "Branded Perfume",
      price: "$70",
    },
    { id: 9, img: "/images/jeans.png", name: "Denim Jeans", price: "$50" },
  ];

  return (
    <div className="w-[90%] mx-auto mt-12">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">New Arrivals</h1>
        <button
          onClick={() => navigate(-1)}
          className="text-gray-800 underline hover:text-gray-600 transition"
        >
          Go Back
        </button>
      </div>

      {/* Carousel Section */}
      <NewArrivals />

      {/* Grid of All New Arrivals */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-12 mb-4">
        Explore More New Arrivals
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allNewArrivals.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-52 object-cover rounded-lg"
            />
            <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsPage;
