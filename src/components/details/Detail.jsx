import React from "react";
import { Link } from "react-router-dom";
import "./Detail.css";
import { CiStar } from "react-icons/ci";

function Detail() {
  
  let data;
  if (sessionStorage.getItem("Detail") === null) {
    console.log("No Data Availble");
    data = null;
  } else {
    data = JSON.parse(sessionStorage.getItem("Detail"));
    console.log(data);
  }

  const AddtoCart = () => {
    let cartObject = {
      data,
      count: 1,
    };
    const cartData = sessionStorage.getItem("cart");
    let cartArr;
    if (cartData === null) {
      cartArr = [];
      cartArr.push(cartObject);
    } else {
      cartArr = JSON.parse(cartData);
      let tempCount;
      let indexOfCart;
      if (
        cartArr.some((item, index) => {
          if (item.data.id === data.id) {
            tempCount = item.count;
            indexOfCart=index
            return true;
          }
          return false;
        })
      ) {
        console.log("duplicate");
        cartArr.splice(indexOfCart,1);
        cartArr.push({
          ...cartObject,
          count: tempCount + 1,
        });
        console.log(cartArr);
      } else {
        cartArr.push(cartObject);
      }
    }
    sessionStorage.setItem("cart", JSON.stringify(cartArr));
  };

  return (
    <div>
      {data === null ? (
        ""
      ) : (
        <div className="detail">
          <div className="img">
            <img src={data.image} alt={data.title} />
            <p>
              {data.rating.rate}
              <CiStar />
            </p>
            <button onClick={AddtoCart}>Add To Cart</button>
          </div>
          <div className="list">
            {" "}
            <div className="titlePrice">
              <p id="title">{data.title}</p>
              <p className="price"> $ {data.price}</p>
            </div>{" "}
            <div className="des">
              <h3>Discription</h3>
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
