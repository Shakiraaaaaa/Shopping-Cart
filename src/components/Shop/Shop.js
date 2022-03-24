import React, { useEffect, useState } from 'react';
import Products from '../../products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    })

    const handleClick = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Products key={product.id}
                        product={product}
                        handleClick={handleClick}
                    ></Products>)
                }
            </div>
            <div className="cart-container">
                <h2>Orders</h2>
                <h3>Selected items: {cart.length}</h3>
            </div>
        </div>
    );
};

export default Shop;