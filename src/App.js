import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Head, ThemeButton, ImageSize, GlobalStyle } from "./Styles";
import ProductList from "./component/ProductList";
import { Switch, Route } from "react-router";
import Home from "./component/Home";
import "./App.css";
import products from "./products";
import ProductDetail from "./component/ProductDetail";
//import productItem from "./component/ProductItem"
import NotFound from "./component/NotFound";

import NavBar from "./component/NavBar";
import EasyTrips from "./component/EasyTrips";
import MediumTrips from "./component/MediumTrips";
import HardTrips from "./component/HardTrips";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [_products, setProduct] = useState(products);

  const deleteproduct = (productId) => {
    let newproduct = _products.filter((product) => product.id !== productId);
    setProduct(newproduct);
  };

  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Head>
        <Switch>
          <Route path="/products/EasyTrips">
            <EasyTrips />
          </Route>
          <Route path="/products/MediumTrips">
            <MediumTrips />
          </Route>
          <Route path="/products/HardTrips">
            <HardTrips />
          </Route>
          <Route path="/products/:productSlug">
            <ProductDetail products={_products} deleteproduct={deleteproduct} />
          </Route>
          <Route path="/products">
            <ProductList
              setCurrentProduct={setCurrentProduct}
              products={_products}
              deleteproduct={deleteproduct}
            />
          </Route>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Head>
    </ThemeProvider>
  );
}

export default App;
