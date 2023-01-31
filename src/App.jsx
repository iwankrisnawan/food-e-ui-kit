import ReactDOM from "react-dom/client";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Splash_screen from "./pages/Splash_screen";
import Onboarding1 from "./pages/Onboarding_1";
import Onboarding2 from "./pages/Onboarding_2";
import Onboarding3 from "./pages/Onboarding_3";
import Get_started from "./pages/Get_started";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Forgot_password from "./pages/Forgot_password";
import Email_sent from "./pages/Email_sent";
import Reset_password from "./pages/Reset_password";
import Address_setup from "./pages/Address_setup";
import Payment_setup from "./pages/Payment_setup";
import Product_detail from "./pages/Product_detail";
import Search from "./pages/Search";
import Search_input from "./pages/Search_input";
import Search_active from "./pages/Search_active";
import Search_category from "./pages/Search_category";

export default function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/splash-screen" element={<Splash_screen />} />
      <Route path="/onboarding1" element={<Onboarding1 />} />
      <Route path="/onboarding2" element={<Onboarding2 />} />
      <Route path="/onboarding3" element={<Onboarding3 />} />
      <Route path="/get-started" element={<Get_started />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<Forgot_password />} />
      <Route path="/email-sent" element={<Email_sent />} />
      <Route path="/reset-password" element={<Reset_password />} />
      <Route path="/address-setup" element={<Address_setup />} />
      <Route path="/payment-setup" element={<Payment_setup />} />
      <Route path="/product-detail" element={<Product_detail />} />
      <Route path="/search" element={<Search />} />
      <Route path="/search-input" element={<Search_input />} />
      <Route path="/search-active" element={<Search_active />} />
      <Route path="/search-category" element={<Search_category />} />
    </Routes>
  );
}
