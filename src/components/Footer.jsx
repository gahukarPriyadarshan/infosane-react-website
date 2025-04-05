import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-extrabold tracking-wide text-white">Ultras</h2>
          <p className="mt-2 text-gray-400">Your go-to destination for fashion, beauty, and style.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Customer Service</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>FAQ</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Returns & Refunds</li>
            <li>Cookie Guidelines</li>
            <li>Delivery Information</li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>About Us</li>
            <li>Conditions</li>
            <li>Our Journals</li>
            <li>Careers</li>
            <li>Affiliate Programme</li>
            <li>Ultras Press</li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold">Subscribe Us</h3>
          <p className="text-gray-400">Subscribe to our newsletter to get updates about our grand offers.</p>
          <div className="mt-3 flex">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 rounded-l-md border-none outline-none text-gray-900"
            />
            <button className="bg-red-600 px-4 py-2 rounded-r-md text-white">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 mt-8">
        <Facebook className="text-gray-400 hover:text-white cursor-pointer" fontSize="large" />
        <Instagram className="text-gray-400 hover:text-white cursor-pointer" fontSize="large" />
        <Twitter className="text-gray-400 hover:text-white cursor-pointer" fontSize="large" />
        <YouTube className="text-gray-400 hover:text-white cursor-pointer" fontSize="large" />
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Ultras. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
