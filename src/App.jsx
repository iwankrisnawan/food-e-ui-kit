import ReactDOM from "react-dom/client";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
  );
}
