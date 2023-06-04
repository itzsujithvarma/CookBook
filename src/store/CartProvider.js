import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalPrice: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = [...state.items];
        const index = updatedItems.findIndex(item => item.id === action.item.id);
        if (index === -1) {
            updatedItems.push(action.item);
        }
        else {
            updatedItems[index].count = updatedItems[index].count + action.item.count;
        }
        const updatedTotalPrice = state.totalPrice + (action.item.count * action.item.price);
        return { items: updatedItems, totalPrice: updatedTotalPrice }
    }
    if (action.type === 'REMOVE') {
        let updatedItems = [...state.items];
        const index = updatedItems.findIndex(item => item.id === action.id);
        const updatedItem = updatedItems[index];
        const updatedTotalPrice = state.totalPrice - updatedItem.price;
        updatedItem.count = updatedItem.count - 1;
        if(updatedItem.count === 0){
            updatedItems = updatedItems.filter(item => item.id !== updatedItem.id);
        }
        return { items: updatedItems, totalPrice: updatedTotalPrice < 0 ? 0 : updatedTotalPrice }
    }
    return defaultCartState;
}
const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = item => {
        dispatchCartAction({ type: 'ADD', item: item })
    };
    const removeItemFromCartHandler = id => {
        dispatchCartAction({ type: 'REMOVE', id: id })

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