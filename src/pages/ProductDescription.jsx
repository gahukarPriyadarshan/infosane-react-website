import { Button, Typography, Rating } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 7,
    img: "/images/shirt.png",
    name: "Men's Shirt",
    price: "Rs 3000",
    description:
      "A stylish and comfortable men's shirt made from premium cotton. Perfect for casual and formal wear.",
    category: "Men's Clothing",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Blue", "Black"],
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 8,
    img: "/images/dress.png",
    name: "Women's Dress",
    price: "Rs 4445",
    description:
      "Elegant and trendy women's dress made with high-quality fabric. Ideal for parties and special occasions.",
    category: "Women's Clothing",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Pink", "Green"],
    rating: 4.8,
    reviews: 95,
  },
  {
    id: 1,
    img: "/images/sneakers.png",
    name: "Sneakers",
    price: "Rs 22,460",
    description:
      "Premium sneakers with a modern design and high durability. Comfortable fit for everyday use.",
    category: "Footwear",
    sizes: [6, 7, 8, 9, 10, 11],
    colors: ["Black", "White", "Gray"],
    rating: 4.7,
    reviews: 80,
  },
  {
    id: 2,
    img: "/images/luxurywatch.png",
    name: "Luxury Watch",
    price: "Rs 70,020",
    description:
      "A classic luxury watch with a sleek design and high-precision movement. Perfect for business and casual wear.",
    category: "Accessories",
    brand: "Rolex",
    warranty: "2 Years",
    rating: 4.9,
    reviews: 110,
  },
  {
    id: 3,
    img: "/images/bag.png",
    name: "Leather Handbag",
    price: "Rs 3000",
    description:
      "A premium leather handbag with spacious compartments. A must-have for everyday essentials.",
    category: "Accessories",
    material: "Genuine Leather",
    colors: ["Black", "Brown", "Tan"],
    rating: 4.6,
    reviews: 60,
  },
  {
    id: 4,
    img: "/images/letherjackets.png",
    name: "Leather Jackets",
    price: "Rs 7890",
    description:
      "Stylish leather jacket with a comfortable fit. Keeps you warm while looking fashionable.",
    category: "Men's Clothing",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Black", "Brown"],
    rating: 4.4,
    reviews: 50,
  },
  {
    id: 5,
    img: "/images/letherbelts.png",
    name: "Leather Belts",
    price: "Rs 990",
    description:
      "Durable and stylish leather belt for both casual and formal wear.",
    category: "Accessories",
    material: "Genuine Leather",
    colors: ["Black", "Brown"],
    rating: 4.3,
    reviews: 30,
  },
  {
    id: 6,
    img: "/images/luxuryperfume.png",
    name: "Luxury Perfume",
    price: "Rs 20,000",
    description:
      "A premium fragrance with a long-lasting and refreshing scent.",
    category: "Beauty",
    brand: "Chanel",
    volume: "100ml",
    rating: 4.8,
    reviews: 85,
  },
];

const ProductDescription = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!product)
    return (
      <Typography variant="h5" className="text-center mt-10 text-red-500">
        Product not found!
      </Typography>
    );

  return (
    <div className="w-[90%] mx-auto mt-20 flex flex-col lg:flex-row gap-10">
      {/* Product Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={product.img}
          alt={product.name}
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>

      {/* Product Details */}
      <div className="w-full lg:w-1/2">
        <Typography variant="h4" className="font-bold text-gray-900">
          {product.name}
        </Typography>
        <Typography variant="h6" className="text-gray-700 mt-2">
          {product.price}
        </Typography>

        {/* Rating Section */}
        <div className="flex items-center mt-2">
          <Rating value={product.rating} precision={0.5} readOnly />
          <Typography variant="body2" className="ml-2 text-gray-600">
            ({product.reviews} Reviews)
          </Typography>
        </div>

        {/* Product Description */}
        <Typography variant="body1" className="text-gray-600 mt-4">
          {product.description}
        </Typography>

        {/* Additional Product Details (Sizes & Colors if available) */}
        {product.sizes && (
          <div className="mt-4">
            <Typography variant="subtitle1" className="text-gray-800 font-semibold">
              Available Sizes:
            </Typography>
            <div className="flex gap-2 mt-1">
              {product.sizes.map((size, index) => (
                <span
                  key={index}
                  className="px-3 py-1 border border-gray-300 rounded-md text-gray-700"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        {product.colors && (
          <div className="mt-4">
            <Typography variant="subtitle1" className="text-gray-800 font-semibold">
              Available Colors:
            </Typography>
            <div className="flex gap-2 mt-1">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="px-3 py-1 border border-gray-300 rounded-md text-gray-700"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Add to Cart and Buy Now Buttons */}
        <div className="mt-6 flex gap-4">
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
          <Button variant="outlined" color="secondary">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
