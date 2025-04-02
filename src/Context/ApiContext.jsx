import { createContext, useEffect, useState } from "react";

export const ApiContext =  createContext();

export const ApiProvider = ({children}) => {
    const [products,setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterProduct,setFilterProduct] = useState('');

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then((res) => res.json())
        .then((data) => {
            setProducts(data.slice(0,39));
            setLoading(false);
        })
        .catch((error) => console.log('Error al cargar productos:', error));
    }, [])

    return(
        <ApiContext.Provider value={{products, loading,filterProduct,setFilterProduct}}>
            {children}
        </ApiContext.Provider>
    )
}






