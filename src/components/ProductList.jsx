import React, { useContext } from 'react'
import { ApiContext } from '../Context/ApiContext'
import { useCart } from '../Context/CartContext';
import { NavLink } from 'react-router-dom';



function ProductList() {
    const {filterProduct,loading} = useContext(ApiContext);
    const { dispatch } = useCart();
    if(loading){
        return <div className='container-productList'>
            <p className='loading-p'>Cargando...</p>
        </div>
    }
  return (
    <>
    <div className='container-productList'>
        {filterProduct.length > 0 ? (
            filterProduct.map(product => (
                <div className='box-productsList' key={product.id}>
                    <div className='container-img-products'>
                        <NavLink to={`/product/${product.id}`}>
                        <img src={product.images[0]} alt={'products'} />
                        </NavLink>
                    </div>
                    <div className='container-data-productsList'>
                        <div>
                            <h3 className='title-productsList'>{product.title}</h3>
                        </div>
                        <div className='container-data-price'>
                            <div className='container-flex-price'>
                                <span className='name-price-products'>Precio</span>
                                <strong className='price-products'>$ {product.price}</strong>
                            </div>
                            <button className="btn-add-to-cart" onClick={() => dispatch({type: "ADD_TO_CART", payload: product})}>Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            ))
        ) : (
            <div className='container-error'>
                <h2 className='error-h2'>No se encontraron resultados.</h2>
                <p className='error-p'>Por favor, inténtelo de nuevo.</p>
            </div>
        )}
        
    </div>
    </>
  )
}

export default ProductList