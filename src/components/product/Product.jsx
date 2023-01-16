import React, { useState,useEffect } from 'react';
import Api from '../utils/api/Api';
import { ProductList } from './ProductList';

 


function Product() {
    const[name,setName] = useState(null);
    useEffect(() => {
      const apiData = async () => {
        const productdata = await Api(
          "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products"
        );
        const result = productdata.data;

        setName(result);
      };
      apiData();
    },[]);
  

  return (
    <div>
    <ProductList productDetail={name}/>
    </div>
  )
}

export default Product;
