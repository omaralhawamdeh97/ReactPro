import { DeleteButton } from "../Styles";
const DeleteProduct =(props )=>{
return <DeleteButton onClick={()=>props.deleteproduct(props.productId)}>Delete Product</DeleteButton>}

export default DeleteProduct;