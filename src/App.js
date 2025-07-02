import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home/Home";
import Hymns from "./pages/Hymns/Hymns";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hymns/:number" element={<Hymns />} />
      </Routes>
    </Router>
  );
}
