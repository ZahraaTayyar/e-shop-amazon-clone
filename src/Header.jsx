import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
// import { useStateValue } from "./StateProvider";

function Header() {
  // const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header-logo">
          <StorefrontIcon className="header-logoImage" fontSize="large" />
          <h2 className="header-logoTitle">eSHOP</h2>
        </div>
      </Link>

      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <SearchIcon className="header-searchIcon" />
      </div>

      <div className="header-nav">
        <div className="nav-item">
          <span className="nav-itemLineOne">Hello Guest</span>
          <span className="navItemLineTwo">Sign In</span>
        </div>

        <div className="nav-item">
          <span className="nav-itemLineOne">Your</span>
          <span className="navItemLineTwo">Shop</span>
        </div>

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav-itemBasket">
            <span className="nav-itemLineOne">
              <ShoppingBasketIcon className="itemBasket" />
            </span>
            <span className="navItemLineTwo nav-basket-count">{}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
