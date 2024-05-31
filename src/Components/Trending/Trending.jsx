import React, { useEffect } from "react";
import { storeData } from "../../assets/data/dummyData";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Trending.css";
export default function Trending() {
  library.add(faCircleArrowLeft, faCircleArrowRight);
  useEffect(() => {
    const contTrending = document.querySelector(".cont-trending");
  }, []);

  return (
    <div className="contTrend">
      <div className="trend">
        <div className="title-trend">
          <h5>Trending Now</h5>
        </div>
        <div className="main-btn-trend">
          <FontAwesomeIcon className="icon-l" icon={faCircleArrowLeft} />
          <FontAwesomeIcon className="icon-r" icon={faCircleArrowRight} />
        </div>
      </div>
      <div className="cont-trending">
        {storeData.slice(0, 6).map((item, key) => {
          return (
            <div key={key}>
              <div className="card">
                <div className="image">
                  <img src={item.image} alt="" />
                </div>
                <div className="title">
                  <h6>{item.type}</h6>
                </div>
                <div className="price">
                  <p>{item.price}$</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
