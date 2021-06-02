import ProductItem from "./ProductItem" 
import products from "../products"
const ProductList =( )=>{
 const descr = products.map((product) =>(
  <ProductItem product={product} key={product.id} />
  )); 
return (
<div className = "Row">      

{descr}

   </div>

)}
export default ProductList;