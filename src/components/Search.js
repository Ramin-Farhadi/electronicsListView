import { useEffect } from "react";
import "../assets/css/search-style.css";

const Search = ({ products, searchProducts, setSearchProducts }) => {
  //Model

  useEffect(() => {}, [searchProducts]);

  //Controllers
  const searchHandler = (e) => {
    // make the string lowercase
    const searchStr = e.target.value.toLowerCase();
    setSearchProducts(
      products.filter((product) => {
        return product.title.toLowerCase().includes(searchStr);
      })
    );
  };
  //Views
  return (
    <div className="searchContainer">
      <input
        type="text"
        onChange={searchHandler}
        placeholder="Search your products"
      ></input>
    </div>
  );
};

export default Search;
