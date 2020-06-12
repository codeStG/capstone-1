import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Products from "./Products";
import Search from "./components/Search";
import { Route } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";

function App() {
  const [products, setProducts] = useState(Products);
  const [searchResults, setSearchResults] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [quan, setQuan] = useState();

  const handleAddCart = (serial) => {
    //Update cart items
    let temp = products.filter((p) => p.serial === serial);
    setCartItems([...cartItems, ...temp]);

    //Update cart total
    const prices = products.filter((p) => p.serial === serial);
    temp = prices.map((p) => {
      return p.price;
    });
    temp = parseFloat(temp);
    setCartTotal(cartTotal + temp);

    //Update quantity
    const quans = products.filter((p) => p.serial === serial);
    temp = quans.map((p) => {
      p.quantity = p.quantity - 1;
      return p.quantity;
    });
    temp = parseInt(temp);
    setQuan(temp);
    setQuan(temp - 1);
  };

  return (
    <div>
      <Header />
      <Route exact path="/">
        <div>
          <Search
            setSearchResults={setSearchResults}
            searchResults={searchResults}
            products={products}
          />
          <Card handleAddCart={handleAddCart} products={products} />
        </div>
      </Route>
      <Route path="/cart">
        <Cart
          cartTotal={cartTotal}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </Route>
    </div>
  );
}

export default App;
