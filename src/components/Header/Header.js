import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/header-logo.png";
import searchIcon from "../../assets/icons/searchIcon.png";
import ShoppingCart from "../../assets/icons/shopping-cart.png";
import "./Header.css";
import HeaderOption from "./HeaderOption";
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
          <HeaderOption option_one={"Hello Guest"} option_two="Sign In" />
        </Link>
        <Link to="/orders">
          <HeaderOption option_one="Return" option_two="& orders" />
        </Link>
        <HeaderOption option_one="Your" option_two="Prime" />

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
