import ProductList from "./component/ProductList"
import Picture from "./component/Picture";
import './App.css';
function App() {

  return (
    <div >
      <header className="App-header">
            <p>Phone Store</p>
         <Picture/>
          <h1>Apple </h1>
         </header>

         <ProductList/>
    </div>
  );
}

export default App;
