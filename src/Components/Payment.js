import React from 'react';
import './Payment.css';
import { useStateValue } from "../StateProvider";
import ChosenItem from './ChosenItem';


function Payment() {
    const [{ user, cart }, release] = useStateValue();

    return (
        <div className="payment-background">
            <div className="payment-container">
                <div className="payment-area">
                    <div className="title">
                        <h3>Delivery Address</h3>
                            <div className="address">
                                <p>{user?.email}</p>
                                <p>5821 Chatham Lane</p>
                                <p>The Colony, Texas</p>
                            </div>
                    </div>
                </div>
            {/* Delivery address */}

            {/* Item review */}
                <div className="payment-area">
                    <div className="title">
                        <h2>Review Chosen Items</h2>
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
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment
