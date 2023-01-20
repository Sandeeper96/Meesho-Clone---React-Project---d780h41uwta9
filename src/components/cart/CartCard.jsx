import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./Cart.css"

function CartCard(props) {
    const [addcart, setAddcart]= useState(props.cartItem.count);


    console.log(props)
   const cartRemove=()=>{
    setCartoff(false);
   }

    const AddtoCart = () => {
        let cartObject = {
          data:props.cartItem.data,
          count: props.cartItem.count,
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
              if (item.data.id === props.cartItem.data.id) {
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
            setAddcart(tempCount+1)
            console.log(cartArr);
          } else {
            cartArr.push(cartObject);
          }
        }
        sessionStorage.setItem("cart", JSON.stringify(cartArr));
      };

      const removeCart=()=>{
        let cartObject = {
            data:props.cartItem.data,
            count: props.cartItem.count
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
                if (item.data.id === props.cartItem.data.id) {
                  tempCount = item.count;
                  indexOfCart=index
                  return true;
                }
                return false;
              })
            ) {
              console.log("duplicate");
              cartArr.splice(indexOfCart,1);
              if(tempCount===0){
                return 
              }
              cartArr.push({
                ...cartObject,
                count: tempCount - 1,
                
                
  
              });
              setAddcart(tempCount-1)
              console.log(cartArr);
            } else {
              cartArr.push(cartObject);
            }
          }
          sessionStorage.setItem("cart", JSON.stringify(cartArr));
        

      }
  return (
    <div className='cart-detail'>
    <div className='cart-data'>
    <img src={props.cartItem.data.image} alt="" />
    <p>{props.cartItem.data.title}</p>
    <h4> $ {props.cartItem.data.price}</h4>
    <div className='haldle'>
    <button onClick={removeCart}>-</button>
    <h2>{addcart}</h2>
    <button onClick={AddtoCart}>+</button>
    </div>
    <NavLink to="/payment">
    <button className='buynow'>Buy Now</button>
    </NavLink>
    </div>
   

    </div>
  )
}

export default CartCard