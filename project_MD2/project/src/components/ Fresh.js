import React, { useEffect ,useState } from 'react'
import Footer from './Footer'
import Nabar from './Nabar'
import Slide from './Slide'
import axios from 'axios'
export default function  Fresh() {
  let element='';
  let [listFresh,setListFresh]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:3009/product?disauth_like=1`)
    .then ((res)=>{
      setListFresh(res.data)
    })
  },[])
  element=listFresh.map((product)=>{
    return <div classname="col" key={listFresh.productId}>
    <div classname="card ">
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
     <div className='App'><h2>Hoa quả tươi</h2></div>
     <div className="row row-cols-1 row-cols-md-4 g-4" id="drawTable" > {element}</div>
    <Footer></Footer>
</div>
  )
}
