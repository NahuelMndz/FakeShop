import React, { useContext, useState } from 'react'
import { ApiContext } from '../Context/ApiContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Search() {
    const {products, setFilterProduct} = useContext(ApiContext);
    const [query, setQueary] = useState("")

    const handleSearch = () => {
        if(query.trim() === ""){
            setFilterProduct(products);
        }else{
            setFilterProduct(products.filter(product => product.title.toLowerCase().includes(query.toLowerCase())))
        }
    }

  return (
    <>
    <div className='container-search'>
        <div className='box-search'>
            <input className='input-search' type="text" placeholder='Buscar' value={query} onChange={e => setQueary(e.target.value)}/>
            <button className='btn-search' onClick={handleSearch}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
    </div>
    </>
  )
}

export default Search