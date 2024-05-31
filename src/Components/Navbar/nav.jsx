import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart,
  faStar,
  faCheck,
  faCartShopping,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from "../CartComponent/CartComponent";
import { useSelector } from "react-redux";
import { totalAmountSelector } from "../../Selectors/Cart/cartSelector";
import { useState } from "react";
import { useDispatch } from "react-redux";
import loginSelector from "../../Selectors/Login/loginSelector";
import { loginOutReducer } from "../../features/Login/LoginSlice";
import { bannerReducer } from "../../features/Banner/bannerSlice";

export default function Nav() {
  const totalAmount = useSelector(totalAmountSelector);

  library.add(
    faHeart,
    faStar,
    faCheck,
    faCartShopping,
    faArrowRightFromBracket
  );
  const [showModel, setShowModel] = useState(false);
  const [showNav, setShowNav] = useState("hide");
  const showNavab = () => {
    setShowNav("show");
  };

  const handelShow = () => {
    setShowModel(!showModel);
    dispatch(bannerReducer(!showModel));
  };
  const dispatch = useDispatch();
  const user = useSelector(loginSelector);
  const { name, image } = user;

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-2 ">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand fw-bold" href="#">
            One store
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-uppercase"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link to={"/categories"}>
                  <a className="nav-link text-uppercase" href="#">
                    categories
                  </a>
                </Link>
              </li>
              
            </ul>
            <form className="d-flex gap-4" role="search">
              {totalAmount >= 0 ? (
                <>
                  <div>
                    <Cart />
                  </div>
                  <div className=" d-flex align-items-center justify-content-center align-items-center gap-3">
                    {image && (
                      <img
                        src={image}
                        alt=""
                        style={{ width: "30px", borderRadius: "50%" }}
                      />
                    )}

                    {/* <p className="text-dark text-capitalize ">Hii</p>
                    {name && <p>{name}</p>} */}
                    <FontAwesomeIcon
                      className="iconOut"
                      icon={faArrowRightFromBracket}
                      onClick={() => dispatch(loginOutReducer())}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <div>
                      <Cart />
                    </div>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
