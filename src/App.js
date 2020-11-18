import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
// install react router dom to link home page/header with checkout (npm install react-router-dom)
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Components/Login';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Payment from './Components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('publishable key goes here from stripe login account');


function App() {
  // setting initial user state 
  const [ {}, release] = useStateValue();
  // will only run once when the app (whole application) component loads
  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('The current user is ', authUser);

      if (authUser) {
        // just logged in or was logged in 
        release({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // logged out
        release({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])


  return (
    // wrap the whole application in Router 2
    <Router>
      <div className="app">
      {/* will always be rendered; placed on outside of login page component*/}
        <Switch>
        {/* 3 */}
          <Route path="/login">
            <Login />
          </Route> 
        {/* checkout path 2*/}
          <Route path="/checkout">
            <Header /> 
            <Checkout />
          </Route> 
          <Route path="/payment">
            <Header />
            <Payment />
          </Route> 
          {/* default route always at the bottom or it will not work/render */}
          <Route path="/">
            {/* Header Component 0*/}
             {/* Home Component 1*/}
            <Header /> 
            <Home />
          </Route>   
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
