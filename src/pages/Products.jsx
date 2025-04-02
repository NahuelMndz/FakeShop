import { useContext, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ApiContext } from "../Context/ApiContext";
import { useCart } from "../Context/CartContext";

function Products() {
  const { id } = useParams();
  const {products} = useContext(ApiContext);
  const {dispatch } = useCart();
  const [numImg, setNumImg] = useState(0);
 
  const product = products.find((p) => p.id === Number(id));
  if (!product) return <p>Producto no encontrado...</p>;
  return (
    <>
    <div className="container-product">
    <NavLink to='/FakeShop'><button className="btn-back-responsive">Volver</button></NavLink>
    <div className="box-product">
      <div className="container-product-imgs">
        <img onClick={() => setNumImg(0)} src={product.images[0]} alt="" />
        <img onClick={() => setNumImg(1)} src={product.images[1]} alt="" />
        <img onClick={() => setNumImg(2)} src={product.images[2]} alt="" />
      </div>
      <div className="container-product-img">
        <img src={product.images[numImg]} alt="" />
      </div>
      <div className="container-product-data" >
        <div className="container-btn-back">
          <NavLink to='/FakeShop'><button className="btn-back">Volver</button></NavLink>
        </div>
        <div className="container-product-info-name">
          <h2 className="product-info-name">{product.title}</h2>
          <span className="product-info-category">{product.category.name}</span>
        </div>
        <div className="container-info-description">
          <p>{product.description}</p>
        </div>
        <div className="container-info-price">
          <div className="container-flex-price">
            <span>Precio</span>
            <strong>$ {product.price}</strong>
          </div>
          <button onClick={() => dispatch({type: "ADD_TO_CART", payload: product})} className="btn-add-to-cart">Agregar al carrito</button>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Products