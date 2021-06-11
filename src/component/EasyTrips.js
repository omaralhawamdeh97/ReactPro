import products from "../products";
import { Flxii, Row } from "../Styles";
import ProductItem from "./ProductItem";

const EasyTrips = (props) => {
  let descr = products
    .filter((product) => product.diffculty === "Easy")
    .map((product) => <ProductItem product={product} key={product.id} />);
  return (
    <Flxii>
      <Row>{descr}</Row>
    </Flxii>
  );
};

export default EasyTrips;
