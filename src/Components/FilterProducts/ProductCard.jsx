import React from "react";
import "./product.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { singleProducts } from "../../features/Products/productSlice";
export default function ProductCard({
  id,
  name,
  image,
  price,
  size,
  gendre,
  color,
}) {
  const dispatch = useDispatch();
  const {type} = useParams()
  return (
    <Link to={`/filterProducts/${type}/`+ id}>
    <div className="card" style={{ width: "12rem" }} onClick={() => dispatch(singleProducts(id))}>
      <img src={image} className="card-img-top" alt="..." style={{height:"200px"}} />
      <div className="card-body">
        <p className="card-text">
          This amazing kind of clouth just try to wear this kind of T-shirt .
        </p>
      </div>
      <div className="card-bottom">
        <h4>
          <span class="badge text-bg-dark d-flex justifu-content-left">
            {price}$
          </span>
        </h4>
        <span>
          {color.map((col, key) => {
            return (
              <span
                key={key}
                className="spanColor"
                style={{ backgroundColor: col }}
              >
                .
              </span>
            );
          })}
        </span>
        
      </div>
    </div>
    </Link>
  );
}
