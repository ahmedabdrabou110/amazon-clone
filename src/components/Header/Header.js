import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/header-logo.png";
import searchIcon from "../../assets/icons/searchIcon.png";
import ShoppingCart from "../../assets/icons/shopping-cart.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="header-logo" className="header-logo" />
      </Link>

      <div className="header-search">
        <input type="text" className="header-search__input" />
        <img
          src={searchIcon}
          alt="search Icon"
          className="header-search__icon"
        />
      </div>

      <div className="header-nav">
        <Link to="/login">
          <div className="header-option">
            <div className="header-option__line_one">Hello Guest</div>
            <div className="header-option__line_two">Sign In</div>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header-option">
            <div className="header-option__line_one">Return </div>
            <div className="header-option__line_two">& orders</div>
          </div>
        </Link>

        <div className="header-option">
          <div className="header-option__line_one">Your </div>
          <div className="header-option__line_two">Prime</div>
        </div>

        <Link to="checkout">
          <div className="header-option__basket">
            <img src={ShoppingCart} alt="" />
            <span className="header-option__line_two header_basket__count">
              5
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
