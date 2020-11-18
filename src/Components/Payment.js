import React from 'react';
import './Payment.css';
import { useStateValue } from "../StateProvider";
import ChosenItem from './ChosenItem';
import { Link } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';


function Payment() {
    const [{ user, cart }, release] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = e => {
        // stripe magic

    }

    // this event will listen for changes & tell user any error regarding input of info
    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
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
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/> 
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment
