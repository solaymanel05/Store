import React, { useEffect } from "react";
import { storeData } from "../../assets/data/dummyData";
import { library } from "@fortawesome/fontawesome-svg-core";
import {} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./faProd.css";
export default function FaProd() {
  library.add();

  return (
    <>
      <div className="trend">
        <div className="title-trend">
          <h5>Top Picks: Our Favorite Products Just for You</h5>
        </div>
        <div></div>
      </div>
      <div className="cont-faProd">
        {storeData.slice(1, 7).map((item, key) => {
          return (
            <Link to={`/filterProducts/${item.type}/`+ item.id}>
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
            </Link>
            
          );
        })}
      </div>
    </>
  );
}
