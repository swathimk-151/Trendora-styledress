
import './App.css';
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import Home from "./page/Home.jsx";
import Contact from "./page/Contact.jsx";
import Men from "./page/Men.jsx";
import Women from "./page/Women.jsx";
import Kids from "./page/Kids.jsx";
import About from "./page/About.jsx";
import Login from "./page/Login.jsx";
import Signup from "./page/Signup.jsx";
import Wishlist from "./page/Wishlist.jsx";
import Cart from "./page/Cart.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/men" element={<Men />} />

          <Route path="/women" element={<Women />} />

          <Route path="/kids" element={<Kids />} />

          <Route path="/about" element={<About />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="/cart" element={<Cart />} />

          <Route
            path="*"
            element={<h1>Page Not Found</h1>}
          />

        </Routes>

        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;