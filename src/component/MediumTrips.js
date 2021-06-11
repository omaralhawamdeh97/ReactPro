import products from "../products";
import ProductItem from "./ProductItem";
import { Flxii, Row } from "../Styles";

const MediumTrips = (props) => {
  let descr = products
    .filter((product) => product.diffculty === "Medium")
    .map((product) => <ProductItem product={product} key={product.id} />);
  return (
    <Flxii>
      <Row>{descr}</Row>
    </Flxii>
  );
};

export default MediumTrips;
