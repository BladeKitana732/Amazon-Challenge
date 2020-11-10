import React from 'react';
import './TotalPrice.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { cartTotal } from '../reducer';

function TotalPrice() {
    // to pull data from cart
    const [{ cart }, release] = useStateValue();

    return (
        <div className="total">
            <CurrencyFormat renderText={(value) =>(
            <>
                <p>
                    Total ({cart?.length} items): <strong>
                        {`${value}`}
                    </strong>
                </p>
                <small className="gift">
                    <input type="checkbox" /> Items do contain a gift
                </small>
            </>
            )}
            decimalScale={2}
            value={cartTotal(cart)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
           /> 

           <button>Proceed to Checkout</button>
        </div>
    )
}

export default TotalPrice
