import React from 'react'
import ProductList from '../components/ProductList'
import Search from '../components/Search'
import Categories from '../components/Categories'



function Main() {
  return (
    <>        
    <Search/>
    <div className='body'>
        <ProductList/>
        <Categories/>
    </div>
    </>
  )
}

export default Main