import React from "react";
import "./Product.css";
import { CiStar } from "react-icons/ci";

export function ProductList(props) {
  console.log(props.productDetail);
  const listOfProduct = (arr) => {
    return arr.map((item, index) => {
      return (
        <div key={"div" + index} className="product-card">
          <img src={item.image} key={"img" + index} alt={item.title} />
          <p className="title" key={"p" + index}>
            {item.title}
          </p>
          <p className="rupee" key={"price" + index}>
            <span>&#8377;</span> {item.price}
          </p>
          <div className="rating">
            <p className="rating-p" key={"rating" + index}>
              {item.rating.rate}
              <CiStar />
            </p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="product-section">
      {props.productDetail === null ? "" : listOfProduct(props.productDetail)}
    </div>
  );
}
