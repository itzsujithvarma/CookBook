import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const ctxt = useContext(CartContext);
    const totalItems = ctxt.items.reduce((current, item)=>{
        return current + item.count;
    },0)
    return (
        <button className={classes.button} onClick = {props.onOpenCart}>
            <span className={classes.icon}>
                <CartIcon></CartIcon>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{totalItems}</span>
        </button>
    );

}

export default HeaderCartButton;