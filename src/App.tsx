import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Auction from "./components/Auction";
import Delivery from "./components/Delivery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import User from "./pages/User";
import Cart from "./pages/Cart";

interface CartItem {
  id: number;
  name: string;
  price: number;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Gallery onAddToCart={addToCart} />
                <Auction />
                <Delivery />
                <Contact />
              </>
            }
          />
          <Route path="/user" element={<User />} />
          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
