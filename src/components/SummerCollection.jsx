import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion"; 

const SummerCollection = () => {
  return (
    <div className="bg-[#f1f1f0] py-20 my-16">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side - Image with Gradient Overlay */}
        <motion.div 
          className="md:w-1/2 relative overflow-hidden rounded-lg shadow-lg"
          whileHover={{ scale: 1.02 }} // Slight scale on hover
        >
          <img
            src="/images/summer-collection.png"
            alt="Summer Collection"
            className="w-full h-[450px] object-cover rounded-lg"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
        </motion.div>

        {/* Right Side - Description */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <Typography
            variant="h3"
            className="font-extrabold text-gray-900 uppercase leading-tight text-[2rem] tracking-[1px]"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            CLASSIC SUMMER
          </Typography>
          <Typography
            variant="h3"
            className="font-extrabold text-[#B8860B] uppercase text-[3rem] tracking-[1px]"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            COLLECTION
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            className="text-gray-700 mt-6 leading-relaxed text-lg font-light tracking-[0.8px]"
            style={{ fontFamily: "Marcellus, Roboto, sans-serif" }}
          >
            Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus,
            gravida orci, fringilla a. Ac sed eu fringilla odio mi. Consequat
            pharetra at magna imperdiet cursus ac faucibus sit libero.
            Ultricies quam nunc, lorem sit lorem urna, pretium aliquam ut c sed eu fringilla odio mi. Consequat
            pharetra at magna imperdiet cursus ac faucibus sit libero.
            Ultricies quam nunc, lorem sit lorem urna,.
          </Typography>

          {/* Shop Collection Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": { backgroundColor: "#B8860B" }, 
              padding: "12px 28px",
              fontWeight: "600",
              textTransform: "none",
              marginTop: "30px",
              borderRadius: "30px", 
            }}
          >
            Shop Collection
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default SummerCollection;
