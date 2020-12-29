import React, { useState } from 'react';
import './Payment.css';
import { useStateValue } from "../StateProvider";
import ChosenItem from './ChosenItem';
import { Link } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { cartTotal } from "../reducer";


function Payment() {
    const [{ user, cart }, release ] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(null);

    // takes an event and executes code for stripe functionality
    const handleInfo = e => {

    }

    // reads changes done with card details and if error occurs to notify the user
    const handlesChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className="payment-background">
            <div className="payment-container">
                <h1>
                    {/* this addition allows user to click on number of items as a link to return them to the checkout page prior */}
                    Checkout (<Link to="/checkout">{cart?.length} items</Link>)
                </h1>
                <div className="payment-area"> 
                    <div className="title">
                        <h3>Delivery Address</h3>
                            <div className="address">
                                <p>{user?.email}</p>
                                <p>Street address</p>
                                <p>The Colony, Texas</p>
                            </div>
                    </div>
                </div>
            {/* Delivery address */}

            {/* Item review */}
                <div className="payment-area">
                    <div className="title">
                        <h3>Review Chosen Items</h3>
                    </div>
                    <div className="chosen-items">
                        {cart.map(item => (
                            <ChosenItem 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating} />
                        ) )}
                    </div>

                </div>

            {/* Payment method */}
                <div className="payment-area">
                    <div className="title">
                        <h4>Payment Method</h4>
                    </div>
                    <div className="card-details">
                        {/* Stripe magic will go here */}
                        <form onSubmit={handleInfo}>
                            <CardElement onChange={handlesChange}/> 

                            <div className=" payment-totalContainer">
                                <CurrencyFormat renderText={(finalTotal) => (
                                    <>
                                        <h3>Order total: {finalTotal}</h3>
                                    </>
                                )}
                                decimalScale={2}
                                value={cartTotal(cart)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment
