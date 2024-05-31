import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/Cart/cartSlice";
import { Link } from "react-router-dom";


export default function ProductSectionItem({
  id,
  name,
  price,
  color,
  image,
  type,
  gendre,
}) {
  const dispatch = useDispatch();

  return (
    <div>
     <Link to={`/filterProducts/${type}/`+ id}>
     <div className="card">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="title">
          <h6>{type}</h6>
        </div>
        <div className="price">
          <p>{price}$</p>
        </div>
        <div className="colors"></div>
        <div className="butt">
          <button
            className="btn-card"
            onClick={() =>
              dispatch(
                addToCart({
                  id: id,
                  color: color,
                  image: image,
                  type: type,
                  price: price,
                })
              )
            }
          >
            Add to cart
          </button>
        </div>
      </div>
     </Link>
      
      
    </div>
  );
}
