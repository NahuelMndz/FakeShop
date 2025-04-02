import React, { useId, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faX } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../Context/CartContext';

function Cart() {
    const cartCheckboxId = useId();
    const {cart, dispatch } = useCart();
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <label className='cart-button' onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon className='icon-cart' icon={faCartShopping} />
        </label>
        <input id={cartCheckboxId} type="checkbox" hidden/>
        <aside className={`sidebar ${isOpen ? "open" : ""}`}>
            <header className='header-cart'>
                <button className='btn-buy'>Continuar compra</button>
                <button className='exit-cart' onClick={() => isOpen === false ? setIsOpen(true) : setIsOpen(false)}>
                <FontAwesomeIcon icon={faX} />
                </button>
            </header>
            {cart.length === 0 ? (<p className='empty-cart'>El carrito esta vacio</p>) : (cart.map((item) => (<div className='container-cart' key={item.id}>
                <img className='img-cart' src={item.images} alt="" />
                <div className='container-cart-info'>
                    <div className='container-flex-title'>
                        {item.title.length > 33 ? (<h3 className='name-cart'>{item.title.slice(0,40)}...</h3>) : <h3 className='name-cart'>{item.title}</h3>  }
                        <button className='remove-cart' onClick={() => dispatch({type: "REMOVE_FROM_CART", payload: item.id})}>borrar</button>
                    </div>
                    <div className='container-cart-quantity'>
                        <div className='container-flex-quantity'>
                        <button className='btn-quantity' onClick={() => dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, quantity: item.quantity + 1 } })}>+</button>
                        <p className='data-quantity'>{item.quantity}</p>
                        <button className='btn-quantity' onClick={() => dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, quantity: item.quantity - 1 } })} disabled={item.quantity === 1}>-</button>
                    </div>
                    <p className='price-cart'> $ {item.price * item.quantity}</p>
                    </div>
                </div> 
            </div>)))}
        </aside>
    </>
  )
}

export default Cart