import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { getproductId } from "../../ApiService/api";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const handleBuyNow = () => {
    window.confirm("The product is out of stock");
  };

  const [productDetails, setproductDetails] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      const productdata = await getproductId(id);
      setproductDetails(productdata);
    };

    fetchProductDetails();
  }, [id]);

  return (
    <div className="produce-details-container">
      <img
        src={productDetails.image}
        alt="alternative"
        className="product-image"
      />

      <div className="product-info">
        <h2 className="product-title">{productDetails.title}</h2>

        <p className="product-description">{productDetails.description}</p>
        <p className="product-price">${productDetails.price}</p>

        <button
          className="buy-now-button"
          onClick= {
            handleBuyNow
          }
        >
          buy now
        </button>
        <Link to="/">
          <button className="go-back-home-button">Go Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
