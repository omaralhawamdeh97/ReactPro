import ProductItem from "./ProductItem" 
import products from "../products"
import { Flxii, Row } from "../Styles";
import {useState} from  "react"
import SearchBar from "./SearchBar";

const ProductList =(props )=>{
  const  [query, setQuery] = useState("");

 const descr = 
 products.filter((product) => product.name.includes(query)).map((product)=> 
  <ProductItem product={product} key={product.id}setCurrentProduct={props.setCurrentProduct} />
  ); 
return (
    <Flxii>
  <SearchBar setQuery={setQuery}/>

<Row>{descr}</Row>      
</Flxii>


)}
export default ProductList;