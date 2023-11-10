import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <nav className="header">
        {/*logo on top the left-img*/}
        <Link to="/">
          <img className="header_logo" 
          src={require("./amazon_PNG11.png")}
          alt=""
          />
        </Link>
       
        {/*search box*/}
        <div className='header_search'>
        <input type="text" className="header_searchInput"/>
        <SearchIcon className="header_searchIcon" />
        </div>

        <div className= "headerNav">

          <Link to="/login" className= "header_link">
           <div className= "header_option">
              <span className= "headerOptionLineOne">Hello Qazi</span>
              <span className= "headerOptionLineTwo">Sign in</span>
           </div>
          </Link>

          <Link to="/" className= "header_link">
           <div className= "header_option">
              <span className= "headerOptionLineOne">Returns</span>
              <span className= "headeroptionlinetwo">& Orders</span>
           </div>
          </Link>

          <Link to="/" className= "header_link">
           <div className= "header_option">
              <span className= "headerOptionLineOne">Your</span>
              <span className= "headeroptionlinetwo">Prime</span>
           </div>
          </Link>

          <Link to="/checkout" className= "header_link">
            <div className= "headerOptionBasket">
              <ShoppingBasketIcon />
              <span className='headerOptionLineTwo headerB'>0</span>
            </div>
          </Link>
        </div>
        
    </nav>
  );
}

export default Header;
