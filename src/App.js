import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/Main/Main";
import Despre from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import Preturi from "./pages/Prices/Prices";
import Cheiauto from "./pages/Cheiauto/Cheiauto";
import Calendar from "./pages/Programari/Calendar";
import Page404 from "./pages/404/Page404";

import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header /> {/* AICI am înlocuit Navbar cu Header */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/despre" element={<Despre />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/home" element={<Home />} />
          <Route path="/preturi" element={<Preturi />} />
          <Route path="/cheiauto" element={<Cheiauto />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
