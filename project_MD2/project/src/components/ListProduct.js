import React, { useEffect } from 'react'
import { act_get_pro } from '../redux/action';
import { useDispatch,useSelector} from 'react-redux';
export default function ListProduct() {
    const dispatch=useDispatch();
    const listProduct=useSelector(state=>state.product);
    useEffect(()=>{
        dispatch(act_get_pro())
    },[]);
    let listElementPro=listProduct.map((product)=>{
      return <div classname="col">
      <div classname="card">
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
    <div className="row row-cols-1 row-cols-md-4 g-4" id="drawTable" > {listElementPro}</div>
  
  )
}
