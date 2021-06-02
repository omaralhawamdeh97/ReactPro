import ProductItem from "./ProductItem" 
import products from "../products"
import { Flxii, Row } from "../Styles";
const ProductList =( )=>{
 const descr = products.map((product) =>(
  <ProductItem product={product} key={product.id} />
  )); 
return (
    <Flxii>
<Row>{descr}</Row>      
</Flxii>


)}
export default ProductList;