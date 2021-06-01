
import products from "./products";


import './App.css';
function App() {


  const descr = products.map((product) => (<div className="div_one">
    
    <img className="iphone" src={product.image}/>


<p>
  {product.name}
</p>


<p>
{product.Price}
</p>


  </div>
 ));
  return (
    <div >
      <header className="App-header">
            <p>Phone Store</p>
          <description>Apple </description>
         <img className="image_One" src=" https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/featured-section-give-back-trade-in_2x.jpg "/>
         </header>

  <div className = "Row">      

{descr}
   </div>
    </div>
  );
}

export default App;
