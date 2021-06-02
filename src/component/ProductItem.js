const ProductItem = (props) => {
    return (
        <div className="div_one">
        <img alt =  {props.product.name}
 className="iphone" src={props.product.image}/>
        <p>
          {props.product.name}
        </p>
        <p>
        {props.product.Price}
        </p>
          </div>);
  };
  
  export default ProductItem;
  