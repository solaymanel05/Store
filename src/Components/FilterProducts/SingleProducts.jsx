import React, {useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./product.css";
import singleProdSelector from "../../Selectors/SingleProduct/singleProduct";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/Cart/cartSlice";
import Nav from "../Navbar/nav";
import Footer from "../Footer/Footer";
import { CounterProducts } from "../../features/Products/productSlice";
import { CounterSelector } from "../../Selectors/Products/productSelector";

export default function SingleProducts() {
  const counter = useSelector(CounterSelector);

  const [count, setCount] = useState(0);

  const plus = () => {
    setCount((prev) => prev + 1);
  };

  const minus = () => {
    setCount((prev) => prev - 1);
  };

  const product = useSelector(singleProdSelector);
  const productSize = product[0].size ? product[0].size[0] : "";
  const [prodSize, setProdSize] = useState(productSize);
  const productColor = product[0].color ? product[0].color[0] : "";
  const [prodColor, setProdColor] = useState(productColor);
  const { id } = useParams();
  const dispatch = useDispatch();
  return (
    <>
      <div className="cont-singleProduct">
        <Nav />
      </div>
      <div className="container-of-content">
        {product
          .filter((prod) => prod.id === id)
          .map((item, key) => {
            return (
              <div className="cont-single">
                <div key={key} className="sing-img">
                  <img src={item.image} alt="" style={{ height: "300px" }} />
                </div>
                <div className="details">
                  <div className="sing-title">{item.type}</div>
                  <div className="sing-para">
                    <p className="sing-text ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus ullam suscipit autem perferendis aut amet
                      adipisci provident sequi velit facere optio quo nobis
                      corporis, blanditiis hic labore ut praesentium dolore.
                    </p>
                  </div>

                  <div className="text-dark fs-4 p-3  bg-light rounded-5">
                    {item.price}$
                  </div>
                  <div className="text-danger p-3  bg-light rounded-5">
                    15% promo
                  </div>
                  <select
                    name="size"
                    className="form-select"
                    aria-label="Default select example"
                    onClick={(e) => setProdColor(e.target.value)}
                  >
                    <option selected="">pick your favorite color ?</option>
                    {item.color.map((col, key) => {
                      return (
                        <option
                          key={key}
                          value={col}
                          className="text-uppercase"
                        >
                          {col}
                        </option>
                      );
                    })}
                  </select>

                  {item.size ? (
                    <select
                      name="size"
                      className="form-select"
                      aria-label="Default select example"
                      onClick={(e) => setProdSize(e.target.value)}
                    >
                      <option selected="">Open this select menu</option>
                      {item.size.map((siz, key) => {
                        return (
                          <option
                            key={key}
                            value={siz}
                            className="text-uppercase"
                          >
                            {siz}
                          </option>
                        );
                      })}
                    </select>
                  ) : (
                    <select
                      className="form-select"
                      disabled={true}
                      aria-label="Default select example"
                    >
                      <option selected="">There is no size</option>
                      {item?.size?.map((siz, key) => {
                        return (
                          <option
                            key={key}
                            value={siz}
                            className="text-uppercase"
                          >
                            {siz}
                          </option>
                        );
                      })}
                    </select>
                  )}
                  <div className="main-count">
                    <button className="plus" onClick={plus}>
                      +
                    </button>
                    <p className="badge fs-6 text-dark bg-light">{count}</p>
                    <button className="minus" onClick={minus}>
                      -
                    </button>
                  </div>

                  <button
                    className="btn-sing"
                    onClick={() => {
                      dispatch(
                        addToCart({
                          id: item.id,
                          type: item.type,
                          image: item.image,
                          name: item.name,
                          size: prodSize,
                          color: prodColor,
                          price: item.price,
                          title: item.title,
                          totalPrice: item.price,
                          amount: 1,
                          counter: counter,
                        })
                      );
                      const countAsNumber = Number(count);
                      dispatch(CounterProducts(countAsNumber));
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
