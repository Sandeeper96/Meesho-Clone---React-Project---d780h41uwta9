import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./Cart.css"

function CartCard(props) {
  let storageDetils= JSON.parse (sessionStorage.getItem("cart"));

    const [addcart, setAddcart]= useState(null);

    useEffect(()=>{
      setAddcart(props.cartItem)
    },[])

    console.log(props)
   const cartRemove=()=>{
    setCartoff(false);
   }

   const increment = (arg) => {
    let tempCount;
    let tempIndex;
    if(storageDetils.some((item,index) => {
        if(item.item === arg.item){
            tempCount = item.count;
            tempIndex = index;
            return true
        } else {
            return false
        }
    })) {
        storageDetils[tempIndex].count = tempCount + 1;
        sessionStorage.setItem('cart',JSON.stringify(storageDetils));
        setAddcart(storageDetils[tempIndex]);
    } else {
        console.log('no data')
    }
    console.log(arg)
}
 
const decrement = (arg) => {
  let tempCount;
  let tempIndex;
  if(storageDetils.some((item,index) => {
      if(item.item === arg.item){
          tempCount = item.count;
          tempIndex = index;
          return true
      } else {
          return false
      }
  })) {
      storageDetils[tempIndex].count = tempCount - 1;
      if(tempCount===1){
        storageDetils.splice(tempIndex,1)
      }
      if(storageDetils===[]){
        sessionStorage.removeItem("cart")
        setAddcart(null)
        return
      }
      console.log(storageDetils)
      sessionStorage.setItem('cart',JSON.stringify(storageDetils));

      setAddcart(storageDetils[tempIndex]);
  } else {
      console.log('no data')
  }
  console.log(arg)
}



     
  return (
    <div>
    { addcart===null  || storageDetils.length===0 ? "":
    <div className='cart-detail'>
    <div className='cart-data'>
    <img src={addcart.data.image} alt="" />
    <p>{addcart.data.title}</p>
    <h4> $ {addcart.data.price}</h4>
    <div className='haldle'>
    <button onClick={()=>{decrement(props.cartItem)}}>-</button>
    <h2>{addcart.count}</h2>
    <button onClick={()=>{increment(props.cartItem)}}>+</button>
    </div>
    <NavLink to="/payment">
    <button className='buynow'>Buy Now</button>
    </NavLink>
    </div>
   

    </div>
      }
      </div>
  )
}

export default CartCard