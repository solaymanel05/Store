import React from "react";
import infoImage from "../../assets/images/info.jpg";
import "./Info.css";
export default function Info() {
  return (
    <>
      <div className="cont-info">
        <div className="main-info">
          <div className="right-info">
            <h3>Must-Have Favorites: Discover Our Top Product Picks</h3>
            <p>
              Explore our top picks, specially curated for you! These favorites
              include the latest tech, stylish apparel, and essential home
              items. Handpicked by our team and loved by our customers, these
              products are sure to delight. Discover your new must-haves today!
            </p>
            <button className="btn-info">shop now</button>
          </div>
          <div className="left-info">
            <img src={infoImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
