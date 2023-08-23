import React from "react";
import "./Product.css";
import Star from "../../assets/icons/star.png";
import shortid from "shortid";
import { useAuth } from "../../Hooks/useAuth";
const Product = ({ title, image, price, rating, id }) => {
  const { dispatch, basket } = useAuth();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        image,
        title,
        price,
        rating,
      },
    });
  };
  console.log(basket);
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
      <img src={image} alt="Image description" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
