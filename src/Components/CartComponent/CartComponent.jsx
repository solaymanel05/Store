import React, { useEffect } from "react";
import "./CartComponent.css";
import { useSelector, useDispatch } from "react-redux";
import totalPriceSelector, {
  cartSelector,
  totalAmountSelector,
} from "../../Selectors/Cart/cartSelector";
import { removeFromCart } from "../../features/Cart/cartSlice";
import { useRef } from "react";
export default function Cart() {
  const totalAmount = useSelector(totalAmountSelector);

  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  const totalPrice = useSelector(totalPriceSelector);
  const btnIconRef = useRef(null);
  const cartRef = useRef(null);
  const clsRef = useRef(null);
  useEffect(() => {
    const btnIcon = btnIconRef.current;
    const cart = cartRef.current;
    const closeBtn = clsRef.current;
    if (btnIcon && cart) {
      const handleClick = () => {
        cart.classList.add("show");
        console.log("clicked for cart");
      };

      btnIcon.addEventListener("click", handleClick);

      // Cleanup event listener on component unmount
    } else {
      console.error("btnIcon or cart element not found");
    }

    if (closeBtn && cart) {
      const handleClose = () => {
        cart.classList.remove("show");
        console.log("clicked for close");
      };

      closeBtn.addEventListener("click", handleClose);

      // Cleanup event listener on component unmount
      return () => {
        closeBtn.removeEventListener("click", handleClose);
      };
    } else {
      console.error("closeBtn or cart element not found");
    }
  }, []);
  return (
    <>
      {cart.length >= 0 ? (
        <>
          <button
            ref={btnIconRef}
            type="button"
            className="btn btn-transparent position-relative"
          >
            🛍️
            <span className="c-n position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark ">
              {totalAmount}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>

          <div ref={cartRef} className="cont-cart-shop ">
            <div className="title-ofCard">
              <h4>Your shoping card </h4>
              <div ref={clsRef} className="close">
                🇽
              </div>
            </div>

            {cart.map((item, key) => {
              return (
                <div key={key} className="main-cart-shop">
                  <div className="img-cart-shop">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="title-shirt">
                    <h6>{item.title}</h6>
                    <h5>{item.price}.00$</h5>
                  </div>
                  <div className="para-cart">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Itaque harum nisi rem, minus veritatis quia tempore
                    </p>
                  </div>
                  <div className="colors">
                    <h3>Colors</h3>
                    <span
                      className="span-color"
                      style={{
                        backgroundColor: item.color,
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        margin: "10px",
                        color: "transparent",
                      }}
                    >
                      .......
                    </span>
                    <span
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        margin: "10px",
                        backgroundColor: "grey",
                        color: "transparent",
                      }}
                    >
                      .....
                    </span>
                    <span
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        margin: "10px",
                        backgroundColor: "teal",
                        color: "transparent",
                      }}
                    >
                      .....
                    </span>
                    <div className="access"></div>
                  </div>

                  <div className="size">
                    <h4>Size</h4>
                    <div className="main-size">
                      <span className="demo-size">L</span>
                      <span className="item-size">{item.size}</span>
                      <span className="demo-size">S</span>
                      <span className="demo-size">M</span>
                    </div>
                  </div>
                  <div>
                    <span className="badge fs-6 text-secondary bg-light">
                      Totall : {item.totalPrice}$
                    </span>
                  </div>
                  <button className="btn btn-dark fs-6 mt-2 ">
                    buy Now 🛒
                  </button>
                  <button
                    className="btn btn-danger fs-6 mt-2 "
                    onClick={() => dispatch(removeFromCart(item))}
                  >
                    Remove
                  </button>

                  <div className="line"></div>
                  <div className="main-mount">
                    <div>
                      <span className="badge fs-6 text-bg-success">
                        {totalPrice}$
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
