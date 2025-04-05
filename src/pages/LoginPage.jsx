import {
  Button,
  TextField,
  Typography,
  Divider,
  IconButton,
  Box,
  Paper,
  Tabs,
  Tab,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple, FaTwitter } from "react-icons/fa";

const LoginPage = ({ setIsAuthenticated }) => {
  const [tab, setTab] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleTabChange = (_, newValue) => {
    setTab(newValue);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = () => {
    if (tab === 0) {
      // Login check
      if (email === "test@example.com" && password === "1234") {
        setIsAuthenticated(true);
        navigate("/"); // 👈 Redirect to homepage
      } else {
        alert("❌ Invalid email or password");
      }
    } else {
      // Sign Up validation
      if (!email || !password || !confirmPassword) {
        alert("Please fill all fields");
        return;
      }
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      alert("✅ Account created successfully!");
      navigate("/home"); // 👈 Redirect after sign up
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage: "url('/images/background.png')",
      }}
    >
      <Paper elevation={8} className="w-full max-w-md p-8 rounded-2xl bg-white/90 backdrop-blur-md">
        <Typography variant="h4" className="text-center font-bold text-indigo-700 mb-4">
          {tab === 0 ? "Welcome Back" : "Create Account"}
        </Typography>

        <Tabs value={tab} onChange={handleTabChange} centered>
          <Tab label="Login" />
          <Tab label="Sign Up" />
        </Tabs>

        <form className="mt-6 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <TextField 
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {tab === 1 && (
            <TextField
              fullWidth
              label="Confirm Password"
              variant="outlined"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}

          {tab === 0 && (
            <Box className="text-right mt-2">
              <Typography
                variant="body2"
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Forgot Password?
              </Typography>
            </Box>
          )}

          <Button
            variant="contained"
            color="primary"
            fullWidth
            className="rounded-md py-3"
            onClick={handleSubmit}
          >
            {tab === 0 ? "Login" : "Sign Up"}
          </Button>
        </form>

        <Divider className="my-6 text-sm text-gray-500">or continue with</Divider>

        <Box className="flex justify-center gap-4">
          <IconButton className="bg-white shadow-md hover:shadow-lg">
            <FcGoogle size={22} />
          </IconButton>
          <IconButton className="bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg">
            <FaFacebookF size={20} />
          </IconButton>
          <IconButton className="bg-black text-white shadow-md hover:shadow-lg">
            <FaApple size={22} />
          </IconButton>
          <IconButton className="bg-blue-400 hover:bg-blue-500 text-white shadow-md hover:shadow-lg">
            <FaTwitter size={20} />
          </IconButton>
        </Box>

        <Typography variant="body2" className="text-center mt-6 text-gray-600">
          {tab === 0 ? (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setTab(1)}
                className="text-indigo-600 cursor-pointer font-semibold"
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setTab(0)}
                className="text-indigo-600 cursor-pointer font-semibold"
              >
                Login
              </span>
            </>
          )}
        </Typography>
      </Paper>
    </div>
  );
};

export default LoginPage;
