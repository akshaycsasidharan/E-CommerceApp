import React, { useState, useEffect } from "react";
import "./Home.css";
import { getAllproducts } from "../../ApiService/api";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllproducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image} alt="alternative" />

          <h2>
            {product.title}
          </h2>

          <p>
            <span className="price">${product.price}</span>
          </p>

          <button>Product Details</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
