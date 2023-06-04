import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';

const MealItem = props =>{
    const ctxt = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`
    const addToCart = (totalCount) => {
        ctxt.addItem({
            id: props.id,
            name: props.name,
            count: totalCount,
            price: props.price
        })
    }
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div><MealItemForm onAddToCart = {addToCart} id = {props.id}/></div>
        </li>
    )
}

export default MealItem;