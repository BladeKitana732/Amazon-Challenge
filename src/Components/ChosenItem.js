import React from 'react';
import './ChosenItem.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../StateProvider';

function ChosenItem({ id, image, title, price, rating}) {
    const [{ cart }, release] = useStateValue();

    const removeItem = () => {
        release({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    return (
        <div className="chosenItems">
            <img className="item_image" src={image} />

            <div className="item_info">
                <p className="item_title">{title}</p>
                <p className="item_price">
                    <small>$</small>
                    <strong>{price}</strong>    
                </p>
                <div className="item_rating">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon />
                    ))}
                </div>
                <button onClick={removeItem}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default ChosenItem
