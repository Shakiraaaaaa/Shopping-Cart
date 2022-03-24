import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    let shipping = 0;
    let total = 0;

    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <div className="cart">
                <h2>Orders</h2>
                <h3>Selected items: {cart.length}</h3>
                <h3>Total price: {total}</h3>
                <h3>Total shipping: {shipping}</h3>
                <h3>Tax: {tax}</h3>
                <h5>Grand Total: {grandTotal}</h5>

            </div>
        </div>
    );
};

export default Cart;