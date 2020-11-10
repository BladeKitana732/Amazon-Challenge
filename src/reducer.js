// think of this as data layer 
export const initialState = {
    cart: [],
    user: null,
};
// selector; .reducer https://www.w3schools.com/jsref/jsref_reduce.asp  
export const cartTotal = (cart) => cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                // current state the component is at
                ...state,
                cart: [...state.cart, action.item],
            };

        case 'REMOVE_FROM_CART':
            // when trying different naming conventions for findIndex it would not work. findId, findItem, findItemId none would compile
            const item = state.cart.findIndex((chosenItem) => chosenItem.id === action.id);
            let updatedCart = [...state.cart];

            if(item >= 0) {
                updatedCart.splice(item, 1);

            } else {
                console.warn(`Cannot remove cause id : ${action.id} is not in cart`)
            }

            return {
                ...state, 
                cart: updatedCart
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }


            // default state
            default:
                return state;
    }
};

export default reducer;