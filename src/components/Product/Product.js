import React from "react";
import "./Product.css";
import Star from "../../assets/icons/star.png";
import shortid from "shortid";
const Product = ({ title, image, price, rating }) => {
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product-rating">
        {Array(rating)
          .fill()
          .map(() => (
            <p key={shortid.generate()}>
              <img src={Star} alt="Star Image" />
            </p>
          ))}
      </div>
      <img src={image} />
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
