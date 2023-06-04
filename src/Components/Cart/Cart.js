import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {

const ctxt = useContext(CartContext);
const hasItems = ctxt.items.length > 0;
const totalPrice = `$${ctxt.totalPrice.toFixed(2)}`;
const cartItems = ( <ul className={classes['cart-items']}> {ctxt.items.map(item =>
    <li>{item.name}</li>)}
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