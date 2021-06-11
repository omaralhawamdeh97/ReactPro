import { useState } from "react";
import { Redirect, Router, useParams } from "react-router";
import { Link } from "react-router-dom";
import products from "../products";
import { Flxii, Logo, PhonePic } from "../Styles";
import EasyTrips from "./EasyTrips";
import HardTrips from "./HardTrips";
import MediumTrips from "./MediumTrips";

const ProductDetal = (props) => {
  const productSlug = useParams().productSlug;
  // const [diffculty, setdiffculty] = useState("");
  const product = props.products.find(
    (product) => product.Slug === productSlug
  );
  if (!product) return <Redirect to="/" />;
  const setView = () => {
    if (product.diffculty === "Medium") return <MediumTrips />;
    else if (product.diffculty === "Hard") return <HardTrips />;
    else return <EasyTrips />;
  };
  // {
  //   setdiffculty(product.diffculty);
  // }
  return (
    <div>
      <Flxii>
        {/* <Link>
          <PhonePic alt={product.name} src={product.image} />
        </Link>
        <p>{product.name}</p>
        <p>Length : {product.length} Km</p>
        <p>Diffuclty : {product.diffculty}</p>
        <p>Rating : {product.rating} Stars</p>
        <p>City : {product.city} </p> */}
        <h5> Recomended Trips : {setView()}</h5>
        <Logo to="/">Go Back </Logo>
      </Flxii>
    </div>
  );
};

export default ProductDetal;
