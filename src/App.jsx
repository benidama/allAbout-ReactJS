import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Component/Navbar";
import PostBlog from "./Component/PostBlog";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Blog from "./Component/Blog";
import Pricing from "./Component/Pricing";
import About from "./Component/About";
import Product from "./Component/Product";
import NoPage from "./Component/NoPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/product" element={<Product />} />
            <Route path="/price" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/free-trail" element={<PostBlog />} />
            <Route path="/*" element={<NoPage />} />
          </Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
