import ReactDOM from "react-dom/client";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Splash_screen from "./pages/Splash_screen";

export default function App() {
  return (
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/splash-screen" element ={<Splash_screen/>}/>
      </Routes>
  );
}
