import React from 'react'
import { BsTextIndentLeft } from 'react-icons/bs';
import CartCard from './CartCard';


function Cart() {

    let data;
    if (sessionStorage.getItem("cart") === null) {
      console.log("No Data Availble");
      data = null;
    } else {
      data = JSON.parse(sessionStorage.getItem("cart"));
      if(data.length===0){
        data=null;
      }
      console.log(data);
    }

    const CardDataCart=(arr)=>{
        return arr.map((item,index)=>{
            return <CartCard cartItem={item}/>
        })

    }

  return (
    <div>
      {data === null ? (
        ""
      ) : (
    CardDataCart(data)
  )
      }
  </div>
  )
  
}

export default Cart