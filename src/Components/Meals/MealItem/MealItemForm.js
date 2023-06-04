import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props => {
    const [isValidInput, setIsValidInput] = useState(true);
    const inputCountRef = useRef();
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredCount = inputCountRef.current.value;
        const enteredCountInNumber = +enteredCount;
        if(enteredCount.trim().length === 0 && enteredCountInNumber <1 && enteredCountInNumber > 5){
            setIsValidInput(false)
            return;
        }
        props.onAddToCart(enteredCountInNumber);
    }
    return (<form className={classes.form} onSubmit ={submitHandler}>
        <Input ref = {inputCountRef} label = 'Count'
        input = {{
            type: 'number',
            id: 'count_' +props.id,
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}/>
        <button>+ Add</button>
        { !isValidInput && <p>Please entered valid count (1-5).</p> }
    </form>)
}

export default MealItemForm;