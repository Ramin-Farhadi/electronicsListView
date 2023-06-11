import "../assets/css/products-style.css";

const ProductListView = ({ searchProducts, products }) => {
  //Modal
  const filteredProduct = searchProducts.length ? searchProducts : products;

  //View
  return (
    <div className="container">
      {filteredProduct.map((product) => {
        return (
          <div key={product.id} className="card">
            <img
              className="productThumb"
              src={product.thumbnail}
              alt={product.title}
            />
            <span className="productTitle">{product.title}</span>
            <p className="productDesc">{product.description}</p>
            <span className="productPrice">$ {product.price}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ProductListView;
