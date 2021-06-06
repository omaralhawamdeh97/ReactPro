
import {Flxii, PhonePic} from "../Styles"

const ProductDetal  = (props)=> {
    return (
        <div><Flxii>

        <PhonePic alt = {props.product.name} src={props.product.image}/>
        <p>
          {props.product.name}
        </p>
      
        <p>
        {props.product.Price}
        </p>      <p>
          {props.product.description}
        </p>
        <button onClick={() =>props.setCurrentProduct(null)}>go back </button>
</Flxii>
          </div>);



  };
  
export default ProductDetal;

