import React from "react";
import "./hero.css";
import cloOne from "../../assets/images/clo-one.jpg";
import sport from "../../assets/images/sport.jpg";
import kids from "../../assets/images/kids.jpg";
import women from "../../assets/images/women.jpg";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="item one">
          <div></div>
          <img src={cloOne} alt="" />
          <h1>Trending Now</h1>
        </div>
        <div className="item two">
          <div></div>
          <img src={women} alt="" />
          <h1>Effortless Style</h1>
        </div>
        <div className="item three">
          <div></div>
          <img src={kids} alt="" />
          <h1>Timeless Pieces</h1>
        </div>
        <div className="item four">
          <div></div>
          <img src={sport} alt="" />
          <h1>Bold Looks</h1>
        </div>
      </section>
    </>
  );
}
