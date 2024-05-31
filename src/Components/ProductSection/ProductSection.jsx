import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./ProductSection.css";

import ProductSectionItem from "./ProductSectionItem";

import { useDispatch, useSelector } from "react-redux";
import { filterType } from "../../features/Products/productSlice";
import { filterTypeData } from "../../Selectors/Products/productSelector";
import Nav from "../Navbar/nav";
import Footer from "../Footer/Footer";

export default function ProductSection() {
  library.add(faMagnifyingGlass);
  const dispatch = useDispatch();

  const data = useSelector(filterTypeData);
  console.log("finalll data:", data);

  const Selected = [
    "Hoodies",
    "T-shirts",
    "pants",
    "dresses",
    "jacket",
    "bags",
  ];

  return (
    <>
      <div className="nav-of-small-size">
        {" "}
        <Nav />
      </div>
      <div className="categories-container">
      <div className="nav-of-big-size">
        {" "}
        <Nav />
      </div>
        <h2 className="title-of-cards">Discover Your Look 👢 👕</h2>
        <div className="but-select">
          {Selected.map((sel, key) => {
            return (
              <div key={key}>
                <button onClick={() => dispatch(filterType(sel))}>{sel}</button>
              </div>
            );
          })}
        </div>

        <motion.div
          className="card-containerTwo"
          initial={{ x: "-100px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
        >
          {data
            // .filter((data) => data.id !== id)
            .map((prod, key) => {
              return (
                <div key={key}>
                  <ProductSectionItem
                    id={prod.id}
                    image={prod.image}
                    type={prod.type}
                    price={prod.price}
                    color={prod.color}
                  />
                </div>
              );
            })}
        </motion.div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
