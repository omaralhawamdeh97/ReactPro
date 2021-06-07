import React, { useState } from "react";
import {ThemeProvider} from "styled-components"
import { Head,ThemeButton, ImageSize,GlobalStyle} from "./Styles"
import ProductList from "./component/ProductList"

import Home from "./component/Home"
import './App.css';
import products from "./products";
import ProductDetal from "./component/ProductDetail"
//import productItem from "./component/ProductItem"


const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};


function App() {

  const  [_products , setProduct  ] = useState(products );

const deleteproduct=(productId)=>{
let newproduct =_products.filter(product=>product.id!==productId)
setProduct(newproduct)
}
const setView = ()=>{
  if (currentProduct)
  return<ProductDetal product = {currentProduct} setCurrentProduct={setCurrentProduct}/>
  else return <ProductList setCurrentProduct={setCurrentProduct }products={_products}deleteproduct={deleteproduct}/>


}


const  [currentProduct, setCurrentProduct] = useState(null);
  const  [color, setcolor] = useState(theme.light);
    const swit =( )=>{

  if (color===theme.light) setcolor(theme.dark )
   else setcolor(theme.light )
}
  return (<ThemeProvider theme={color}>
    
  
      <GlobalStyle/>
      <Head>
          <ThemeButton onClick= {(swit)} >
        Dark Theme
      </ThemeButton>
      
             <Home/>
       <ImageSize alt = "phon" src="https://static.toiimg.com/photo/71335454.cms"/>
      </Head>{setView()}

      </ThemeProvider>
  );
}

export default App;
