import React from 'react';
import './Item.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../StateProvider';

// adding props to render different items
function Item({id, title, image, price, rating}) {
    const [{ cart }, release] = useStateValue();

    // testing cart linked with button
    // console.log("this is the cart", cart);

    const addToCart = () => {
        // release the item into the data layer
        release({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price, 
                rating: rating, 
            },
        });
    }
    return (
        <div className="item">

            <div className="info">
                <p>{title}</p>
                <p className="price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="rating">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon />
                    ))}
                    
                </div>
            </div>

            <img src={image} alt=""/>

            <button onClick={addToCart}>Add to Cart</button>

        </div>
    )
}

export default Item
