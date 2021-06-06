import { PhonePic } from "../Styles";
const ProductItem = (props) => {
  
    return (
        <div>
        <PhonePic onClick={() =>props.setCurrentProduct(props.product)} alt = {props.product.name} src={props.product.image}/>
        <p>
          {props.product.name}
        </p>
      
        <p>
        {props.product.Price}
        </p>     
          </div>);
  };
  
  export default ProductItem;
  