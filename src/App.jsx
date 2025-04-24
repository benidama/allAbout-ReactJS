import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import PostBlog from "./pages/PostBlog";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Product from "./pages/Product";
import LastComp from "./components/LastComp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Product />} />
            <Route path="price" element={<Pricing />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="post" element={<PostBlog />} />
          </Route>
        </Routes>
        <LastComp />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
