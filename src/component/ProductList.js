import ProductItem from "./ProductItem";
import products from "../products";
import { Flxii, Logo, Row, Slider } from "../Styles";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import "../App.css";
const ProductList = (props) => {
  const [query, setQuery] = useState("");
  const [length, setLength] = useState(15);

  let descr = props.products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.city.toLowerCase().includes(query.toLowerCase())
    )
    .filter((product) => product.length <= length)
    .map((product) => (
      <ProductItem
        product={product}
        key={product.id}
        deleteproduct={props.deleteproduct}
      />
    ));

  return (
    <Flxii>
      <div class="dropdown">
        <button class="dropbtn">Choose by diffculty</button>
        <div class="dropdown-content">
          <Link to="/products/EasyTrips">Easy</Link>
          <Link to="/products/MediumTrips">Medium</Link>
          <Link to="/products/HardTrips">Hard</Link>
        </div>

        <Route exact path="/products">
          <SearchBar setQuery={setQuery} />
        </Route>

        <Row>
          <table>
            <h4>Trip Length</h4>
            <Slider
              type="range"
              min="1"
              max="10"
              onChange={(event) => setLength(event.target.value)}
              value={length}
              class="slider"
              id="myRange"
            ></Slider>

            <h6>{length} Km</h6>
          </table>
        </Row>
        <Row>{descr}</Row>
      </div>
    </Flxii>
  );
};
export default ProductList;
