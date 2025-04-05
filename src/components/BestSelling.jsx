import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const bestSellingItems = [
  { id: 1, img: "/images/sneakers.png", name: "Sneakers", price: "Rs 22,460" },
  { id: 2, img: "/images/luxurywatch.png", name: "Luxury Watch", price: "Rs 70,020" },
  { id: 3, img: "/images/bag.png", name: "Leather Handbag", price: "Rs 3,000" },
  { id: 4, img: "/images/letherjackets.png", name: "Leather Jacket", price: "Rs 7,890" },
  { id: 5, img: "/images/letherbelts.png", name: "Leather Belt", price: "Rs 990" },
  { id: 6, img: "/images/luxuryperfume.png", name: "Luxury Perfume", price: "Rs 20,000" },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const BestSellingItems = () => {
  const navigate = useNavigate(); // Define navigate

  return (
    <motion.div 
      className="w-[90%] mx-auto mt-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Section Header */}
      <Typography
        variant="h4"
        className="text-center font-bold text-gray-900 uppercase tracking-[1px]"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        Our Best Selling Items
      </Typography>

      {/* Grid Layout */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10"
        variants={containerVariants}
      >
        {bestSellingItems.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-md cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)" }}
            transition={{ duration: 0.3 }}
            onClick={() => navigate(`/product/${item.id}`)} // Navigate to product description page
          >
            <motion.img
              src={item.img}
              alt={item.name}
              className="w-full h-64 object-cover rounded-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <Typography variant="h6" className="mt-2 font-semibold text-gray-900">
              {item.name}
            </Typography>
            <Typography variant="body1" className="text-gray-600">
              {item.price}
            </Typography>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BestSellingItems;
