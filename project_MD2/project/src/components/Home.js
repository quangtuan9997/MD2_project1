import React from 'react';
import Footer from './Footer';
import ListProduct from './ListProduct';
import Nabar from './Nabar';
import Slide from './Slide';
export default function Home() {
  return (
    <>
    <Nabar></Nabar>
    <Slide></Slide>
    <div className='App'><h2>Sản phẩm mới</h2></div>
    <ListProduct></ListProduct>
    <Footer></Footer>
    </>
  )
}
