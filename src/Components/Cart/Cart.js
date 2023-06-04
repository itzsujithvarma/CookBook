import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

const ctxt = useContext(CartContext);
const hasItems = ctxt.items.length > 0;
const totalPrice = `$${ctxt.totalPrice.toFixed(2)}`;

const cartItemRemoveHandler = (id) => {
    ctxt.removeItem(id);
}
const addCartItemHandler = (item) => {
    ctxt.addItem({...item, count: 1});
}
const cartItems = ( <ul className={classes['cart-items']}> {ctxt.items.map(item =>
    <li><CartItem 
    key ={item.id} name = {item.name} count = {item.count} price = {item.price} 
    onRemove = {cartItemRemoveHandler.bind(null, item.id)} onAdd = {addCartItemHandler.bind(null, item)}
    /></li>)}
</ul>)

return (
    <Modal onCloseCart = {props.onHideCart}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalPrice}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick = {props.onHideCart}>Close</button>
            { hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
);
}
export default Cart;