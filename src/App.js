import { useEffect, useRef, useState } from "react";
import "./App.css";
import ProductListView from "./components/ProductListView";
import Search from "./components/Search";

function App() {
  //Model
  const APIURL = process.env.REACT_APP_APIBASEURL;
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState(products);
  const ProductsReady = useRef(true);
  //Controllers
  useEffect(() => {
    fetch(APIURL)
      .then((resp) => resp.json())
      .then((data) => setProducts(data.products));
    console.log("req sent");
  }, []);

  useEffect(() => {
    if (products.length && ProductsReady.current) {
      console.log(products);
      ProductsReady.current = false;
    }
  }, [products]);

  //View

  return (
    <div>
      <Search
        searchProducts={searchProducts}
        setSearchProducts={setSearchProducts}
        products={products}
        setProducts={setProducts}
      />
      <ProductListView searchProducts={searchProducts} products={products} />
    </div>
  );
}

export default App;
