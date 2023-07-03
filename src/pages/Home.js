import React from 'react'
import Navbar from '../features/navbar/Navbar';
import Product from '../features/products-list/components/product';

function Home(){
  return (
    <div>
        <Navbar>
            <Product />
        </Navbar>
    </div>
  )
}

export default Home;