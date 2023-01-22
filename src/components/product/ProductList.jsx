import React from "react";
import "./Product.css";
import { CiStar } from "react-icons/ci";
import { json, NavLink } from "react-router-dom";

export function ProductList(props) {
  const detailFunction = (arg) => {
    sessionStorage.setItem("Detail", JSON.stringify(arg));
  };
  console.log(props.productDetail);
  const listOfProduct = (arr) => {
    return arr.map((item, index) => {
      return (
        <NavLink to="/detail">
          <div
            onClick={() => {
              detailFunction(item);
            }}
            key={"div" + index}
            className="product-card"
          >
            <img src={item.image} key={"img" + index} alt={item.title} />

            <p className="title" key={"p" + index}>
              {item.title}
            </p>
            <p className="rupee" key={"price" + index}>
              <span>$</span> {item.price}
            </p>
            <div className="rating">
              <p className="rating-p" key={"rating" + index}>
                {item.rating.rate}
                <CiStar />
              </p>
            </div>
          </div>
        </NavLink>
      );
    });
  };

  return (
    <>
      <div className="product-section">
        {props.productDetail === null ? "" : listOfProduct(props.productDetail)}
      </div>
    </>
  );
}
