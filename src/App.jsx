import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home/Home";
import Hymns from "./pages/Hymns/Hymns";
import HymnsIndex from "./pages/HymnsIndex/HymnsIndex";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hinos/:number" element={<Hymns />} />
        <Route path="/indice" element={<HymnsIndex />} />
      </Routes>
    </Router>
  );
}
