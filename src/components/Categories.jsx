import React, { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../Context/ApiContext'

function Categories() {
  const {products,setFilterProduct} = useContext(ApiContext);
  const [selectedCategory, setSelectedCategory] = useState("Todo");
  useEffect(() => {
    if(selectedCategory === "Todo"){
      setFilterProduct(products);
    }else{
      setFilterProduct(products.filter(product => product.category.name === selectedCategory));
    }
  }, [selectedCategory,products, setFilterProduct])

  return (
    <>
    <div className='container-category'>
      <ul className='container-list-category'>
        <h2 className='category-h2'>Categorias: </h2>
        <li className='li-category' onClick={() => setSelectedCategory("Todo")}>Todo</li>
        <li className='li-category' onClick={() => setSelectedCategory(`Electronics`)}>Electrónica</li>
        <li className='li-category' onClick={() => setSelectedCategory(`Shoes`)}>Zapatos</li>
        <li className='li-category' onClick={() => setSelectedCategory('Clothes')}>Ropa</li>
        <li className='li-category' onClick={() => setSelectedCategory('Furniture')}>Muebles</li>
        <li className='li-category' onClick={() => setSelectedCategory('Miscellaneous')}>Misceláneas</li>
      </ul>
    </div>
    </>
  )
}


export default Categories
