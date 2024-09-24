import React from 'react'
import { useState } from 'react'
import { products } from './ProductList'
const ProductDisplay = () => {

    const [cart,setCart]=useState([]);
    const [message,setMessage]=useState('');

    const handleClick = (p) => {
        
        if(cart.length>2){
            alert('Max cart limit reached')
            setMessage('Max cart limit reached');
            return;
        }
        if(cart.includes(p)){
            alert('Product already in cart')
            setMessage('Product already in cart');
            return;
        }
        alert('Product added to cart')
        setCart([...cart,p])

        //console.log(cart);

    }

    

    const res=products.map(p=><div key={p.id}><p>Name:{p.name}</p><p>Price:{p.price}</p><p><button onClick={()=>handleClick(p.name)}>Add to cart</button></p></div>)
  return (
    <div>{res}<br></br>{message}<br></br>{cart}</div>
  )
}

export default ProductDisplay