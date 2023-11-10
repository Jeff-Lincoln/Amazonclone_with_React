import React from 'react';
import Product from './Product';
import './Home.css';


export default function Home() {
  return (
    <div className="home">
         <img className="home_image" 
          src={require("./GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg")}
          alt=""
          />
          {/*product, id, price,rating, title, image  */}
          <div className="home_row">
            <Product
            title="Let's Plant Some Trees Cannabis Humor Marijuana Funny Weed Short Sleeve T-Shirt"
            price={19.98}
            rating={3}
            image="https://m.media-amazon.com/images/I/61QF2xGFnwL._AC_UL600_FMwebp_QL65_.jpg"
            />
            <Product
            id="123455"
            title= "Lenovo Legion Pro 7i Gen 8 Gaming Laptop 2023 Model Intel Core i9-13900HX NVIDIA GeForce RTX 4090"
            price={3299.95}
            rating={5}
            image="https://m.media-amazon.com/images/I/317cmBol4lL._AC_UY327_FMwebp_QL65_.jpg"
            />
            <Product
            id="120055"
            title="coffee"
            price={64.00}
            rating={5}
            image="//https://m.media-amazon.com/images/I/71nYm0M03FL._AC_UL600_FMwebp_QL65_.jpg"
            /> 
          </div>
    </div>
  );
};
