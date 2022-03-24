import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'


const Products = (props) => {
    //console.log(props.product);
    //console.log(props);
    const { name, img, seller, price, ratings } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <div className="product-info">
                <h4><small>Price:{price}</small></h4>
                <h4><small>Seller:{seller}</small></h4>
                <h4><small>RatingL:{ratings} stars</small></h4>

            </div>

            <button onClick={() => props.handleClick(props.product)} className="button-cart"><h3>Add to cart <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon></h3></button>



        </div>
    );
};

export default Products;