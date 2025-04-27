import { loginUser } from "../models/AuthLoginModel";
import { registerUser } from "../models/AuthRegisterModel";
import { PageUrl } from "../constants/pages.constants";
import { supabase } from "../services/supabase/supabaseClient";

export const handleSignUp = async (
  email: string,
  password: string,
  setStatus: (status: string) => void
) => {
  setStatus("Creating account...");
  const { error, data } = await registerUser(email, password);
  if (error) {
    setStatus(`Error: ${error.message}`);
    alert(error.message);
  } else {
    setStatus("Account created successfully!");
    // Handle successful registration, e.g., using data.user or data.session
    console.log("User registered:", data.user);
    // You might want to redirect the user or perform other actions here
  }
};

export const handleLogin = async (
  email: string,
  password: string,
  setStatus: (status: string) => void,
  navigate: (path: string) => void
) => {
  console.log("Attempting to log in...");
  setStatus("Logging in...");
  const { error, data } = await loginUser(email, password);
  if (error) {
    console.log("Login error:", error.message);
    setStatus(`Error: ${error.message}`);
    alert(error.message);
  } else {
    console.log("Login successful:", data.user);
    setStatus("Logged in successfully!");
    navigate(PageUrl.HOME);
    console.log("Navigating to:", PageUrl.HOME);
  }
};

export const handleLogout = async (navigate: (path: string) => void) => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Logout error:", error.message);
  } else {
    console.log("Logged out successfully");
    navigate("/login"); // Redirect to login page
  }
};
