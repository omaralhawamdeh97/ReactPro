import {ThemeProvider} from "styled-components"
import { Head, ImageSize,GlobalStyle} from "./Styles"
import ProductList from "./component/ProductList"
import Home from "./component/Home"
import './App.css';
 const theme=  {
  mainColor: "#242424",   
  backgroundColor: "#fefafb",
  
}

function App() {

  return (<ThemeProvider theme={theme}>
    
  
      <GlobalStyle/>
      <Head>
       <Home/>
       <ImageSize alt = "phon" src="https://static.toiimg.com/photo/71335454.cms"/>
      </Head>
      <ProductList/> 
      </ThemeProvider>
  );
}

export default App;
