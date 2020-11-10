import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from "../firebase";

function Header() {
    const [{ cart, user }, release] = useStateValue();

    // handling user account having log in and out functionality w/in header
    const handleUser = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
        {/* Makes the logo image a clickable link back to the home/landing page */}
         <Link to="/">
            <img className="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon_logo"/>
          </Link>
            
            <div className="search">
                <input className="input_box" type="text"></input>
                {/* Search icon */}
                <SearchIcon className="search_icon" />
            </div> 

            <div className="nav">
                {/* linking login route with this section of nav; tried it with login first and it did not work. it as to be as is */}

              <Link to={ !user && '/login'}>
                <div onClick={handleUser} className="choice">
                    <span className="top">
                        Hello Guest
                    </span>

                    <span className="bottom">
                        {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator#:~:text=The%20conditional%20(ternary)%20operator%20is,if%20the%20condition%20is%20falsy. source used to understand why he used this */}
                        {user ? 'Sign Out' : 'Sign In'}
                    </span>
                </div>
              </Link>

                <div className="choice">
                    <span className="top">
                        Returns
                    </span>
                    <span className="bottom">
                        & Orders 
                    </span>
                </div>

                <div className="choice">
                    <span className="top">
                        Your
                    </span>
                    <span className="bottom">
                        Prime
                    </span>
                </div>
                {/* linking icon with checkout endpoint */}
                <Link to="/checkout">
                    <div className="cart">
                        <ShoppingCartIcon />
                        {/* span tag className has 2 separated by space only */}
                        <span className="bottom item_count">{cart?.length}</span>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header
