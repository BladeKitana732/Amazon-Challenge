import React from 'react';
import { useStateValue } from '../StateProvider';
import './Checkout.css';
import ChosenItem from './ChosenItem';  
import TotalPrice from './TotalPrice.js';

function Checkout() {
    // pulls cart data 
    const [{ cart, user }, release] = useStateValue();

    return (
        <div className="checkout_container">
            <div className="left_page">
                <img className="ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="ad_filler" />

                <div>
                    {/* had to add the ?(optional chaining) within the user.email to ensure when reloading same page it will not state email is null error */}
                    <h2>Hey,  {user?.email} </h2>
                    <h2 className="checkout_title">Your Cart</h2>

                    {cart.map(item =>
                    <ChosenItem 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                    )}

                    {/* ChosenItem Component */}
                </div>
            </div>

            <div className="right_page">
                <h2>Total will go here</h2>
                <TotalPrice />
            </div>

        </div>
    )
}

export default Checkout




{/* <ChosenItem 
id={item.id}
title={item.title}
image={item.image}
price={item.price}
rating={item.rating}
/> */}
