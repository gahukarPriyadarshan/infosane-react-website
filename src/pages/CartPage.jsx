import { useState } from "react";
import { Button, Typography, IconButton } from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";

const initialCartItems = [
  { id: 1, img: "/images/sneakers.png", name: "Sneakers", price: 22460, quantity: 1 },
  { id: 2, img: "/images/luxurywatch.png", name: "Luxury Watch", price: 70020, quantity: 1 },
  { id: 3, img: "/images/bag.png", name: "Leather Handbag", price: 3000, quantity: 1 },
];

const CartPage = () => {
  const [cart, setCart] = useState(initialCartItems);

  // Increase Quantity
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove Item
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Calculate Total Price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="w-[90%] mx-auto mt-22">
      {/* Cart Header */}
      <Typography
        variant="h4"
        className="text-center font-bold text-gray-900 uppercase tracking-[1px]"
        style={{ fontFamily: "Roboto, sans-serif" }}
      >
        Your Shopping Cart
      </Typography>

      {/* Cart Items */}
      <div className="mt-10 flex flex-col lg:flex-row gap-10">
        {/* Left - Cart Items */}
        <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="flex items-center gap-6 border-b py-4">
                <img src={item.img} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />

                <div className="flex-1">
                  <Typography variant="h6" className="font-semibold text-gray-900">
                    {item.name}
                  </Typography>
                  <Typography variant="body1" className="text-gray-600">
                    Rs {item.price.toLocaleString()}
                  </Typography>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <IconButton onClick={() => decreaseQuantity(item.id)} className="border">
                    <Remove />
                  </IconButton>
                  <Typography>{item.quantity}</Typography>
                  <IconButton onClick={() => increaseQuantity(item.id)} className="border">
                    <Add />
                  </IconButton>
                </div>

                {/* Remove Button */}
                <IconButton onClick={() => removeItem(item.id)} className="text-red-500">
                  <Delete />
                </IconButton>
              </div>
            ))
          ) : (
            <Typography variant="body1" className="text-center text-gray-600">
              Your cart is empty.
            </Typography>
          )}
        </div>

        {/* Right - Cart Summary */}
        <div className="lg:w-1/3 bg-[#f1f1f0] p-6 rounded-lg shadow-md">
          <Typography variant="h5" className="font-semibold text-gray-900">
            Order Summary
          </Typography>

          <div className="flex justify-between mt-4">
            <Typography variant="body1" className="text-gray-700">Subtotal:</Typography>
            <Typography variant="body1" className="text-gray-900">Rs {totalPrice.toLocaleString()}</Typography>
          </div>

          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              "&:hover": { backgroundColor: "gray" },
              padding: "12px",
              marginTop: "20px",
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
