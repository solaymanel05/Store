import React from "react";
import "./product.css";
import { useSelector } from "react-redux";
import productSelector, {
  filterGenderProduct,
} from "../../Selectors/Products/productSelector";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useDispatch } from "react-redux";
import Error from "../Error/Error";
import { filterGender } from "../../features/Products/productSlice";

export default function FilterProducts() {
  const filterCard = useSelector(filterGenderProduct);
  console.log("dataProductGendre:", filterCard);
  const product = useSelector(filterGenderProduct);
  const error = useSelector((state) => state.products.error);

  const dispatch = useDispatch();
  console.log("product:", product);
  const { type } = useParams();
  console.log("params", type);
  const genderButtons = ["men", "women"];
  const colorsButtons = [
    "green",
    "red",
    "dark",
    "blue",
    "gray",
    "yellow",
    "purple",
  ];
  const selectSize = ["S", "M", "XL", "XXL", "XXXL"];
  return (
    <div className="card-page p-4">
      <div>
        <div className="title-card-page">
          <h1 className="text-light m-4 pb-4 ">{type}</h1>
        </div>
        <div className=" gendreBtn d-flex gap-3 m-3">
          {genderButtons.map((item, key) => {
            return (
              <div key={key} className="d-flex gap-3">
                <button
                  className="btn btn-light"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(filterGender(item));
                  }}
                >
                  {item}
                </button>
              </div>
            );
          })}

          <div className="dropdown">
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Color
            </button>
            <ul className="dropdown-menu">
              {colorsButtons.map((item, key) => {
                return (
                  <li key={key}>
                    <a
                      className="dropdown-item"
                      href="#"
                      style={{ color: item }}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Size
            </button>
            <ul className="dropdown-menu">
              {selectSize.map((item, key) => {
                return (
                  <li key={key}>
                    <a className="dropdown-item" href="#">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {error ? (
          <Error />
        ) : (
          <div className="card-container">
            {product
              .filter(
                (pro) => pro.type === type || pro.gendre === filterCard.gendre
              )
              .map((pro, index) => {
                return (
                  <div key={index}>
                    <ProductCard
                      size={pro.size}
                      color={pro.color}
                      id={pro.id}
                      type={pro.type}
                      name={pro.name}
                      image={pro.image}
                      price={pro.price}
                      gendre={pro.gendre}
                    />
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}
