import { PhonePic } from "../Styles";
import DeleteProduct from "../buttons/DeleteProduct"
const ProductItem = (props) => {
  const product=props.product;
    return (
        <div>
        <PhonePic onClick={() =>props.setCurrentProduct(props.product)} alt = {props.product.name} src={props.product.image}/>
        <p>
        {props.product.name}
        </p>
      
        <p>
        {props.product.Price}
        </p> 
        <DeleteProduct deleteproduct ={props.deleteproduct} productId={props.product.id}/>    
          </div>);
  };
  
  export default ProductItem;
  