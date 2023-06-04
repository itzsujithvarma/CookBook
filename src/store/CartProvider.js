import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState ={
    items: [],
    totalPrice: 0
}

const cartReducer = (state, action) =>{
    if(action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalPrice = state.totalPrice + action.item.count * action.item.price;
        return { items: updatedItems, totalPrice: updatedTotalPrice}
    }
    return defaultCartState;
}


const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD', item: item})
    };
    const removeItemFromCartHandler = id => {
        dispatchCartAction({type: 'REMOVE', id: id})

    };

    const cartContext = {
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

};

export default CartProvider;