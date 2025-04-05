import { AppBar, Toolbar, IconButton, Badge, InputBase, Menu, MenuItem } from "@mui/material";
import { Menu as MenuIcon, ShoppingCart, AccountCircle, Search } from "@mui/icons-material";
import { useState } from "react";
import Sidebar from "./Sidebar"; 
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="fixed" className="bg-white shadow-md py-2 border-b border-gray-200 ">
        <Toolbar className="flex items-center justify-between px-4 md:px-8">
          {/* Hamburger Icon */}
          <div className="flex items-center gap-3">
            <IconButton onClick={toggleDrawer(true)} className="text-gray-700">
              <MenuIcon fontSize="large" />
            </IconButton>

            {/* Logo */}
            <div className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-wide">
              Infosane
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-[40%] shadow-sm border border-gray-300">
            <Search className="text-gray-500" />
            <InputBase
              placeholder="Search for products..."
              className="ml-3 w-full focus:outline-none bg-transparent text-gray-900"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6">
          <Link to="/cart">
              <IconButton>
                <Badge badgeContent={1} color="error">
                  <ShoppingCart className="text-gray-700" fontSize="large" />
                </Badge>
              </IconButton>
            </Link>
            

            <IconButton onClick={handleProfileMenuOpen}>
              <AccountCircle className="text-gray-700" fontSize="large" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* User Menu */}
      <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>

      {/* Sidebar Component */}
      <Sidebar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navbar;
