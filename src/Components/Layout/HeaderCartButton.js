import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const [bumpButton, setBumpButton] = useState(false);
    const ctxt = useContext(CartContext);
    const items = ctxt.items;
    useEffect(()=>{
        if(items.length >0){
            setBumpButton(true);
        }
        const timer = setTimeout(()=>{
            setBumpButton(false);
        }, 300)
        return ()=>{
            clearTimeout(timer);
        }
    }, [items]);
    const totalItems = items.reduce((current, item)=>{
        return current + item.count;
    },0)
    const btnClasses = `${classes.button} ${bumpButton ? classes.bump : ''}`;
    return (
        <button className={btnClasses} onClick = {props.onOpenCart}>
            <span className={classes.icon}>
                <CartIcon></CartIcon>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{totalItems}</span>
        </button>
    );

}

export default HeaderCartButton;