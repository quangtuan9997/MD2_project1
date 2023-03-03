import React, { useEffect } from 'react';
import Footer from './Footer';
import Nabar from './Nabar';
import Slide from './Slide';
import axios from 'axios';
import { useState } from 'react';
export default function Seed() {
  let elementCombo='';
  let [listCombo,setListCombo]=useState([])
useEffect(()=>{
  axios.get(`http://localhost:3009/product?disauth_like=2`)
  .then ((res)=>{
    setListCombo(res.data)
  })
},[])
  elementCombo=listCombo.map((product)=>{
    return <div classname="col" key={listCombo.productId}>
    <div style={{}} classname="card">
      <img src={product.image} classname="card-img-top" alt="..." />
      <h5 classname="card-title">
         {product.productName}
        </h5>
      <div classname="card-body">
        <p classname="card-text">
          {product.price} VND
        </p>
      </div>
      <div className=".justify-content-sm-center">
        <a href="">chi tiet</a>
        <a href="">Mua</a>
      </div>
    </div>
  </div>
  })
  return (
    <div>
        <Nabar></Nabar>
        <Slide></Slide> 
         <div className='App'><h2>Combo</h2></div>
         <div className="row row-cols-1 row-cols-md-4 g-4" id="drawTable" > {elementCombo}</div>
        <Footer></Footer>
    </div>
  )
}
