import { Fragment } from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const BackDrop =(props)=>{
    return <div className={classes.backdrop} onClick = {props.onClose}></div>
}

const ModalOverLay =(props) =>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const Modal = (props) => {
    const portalElement = document.getElementById('overlays');
    return <Fragment>
        {ReactDOM.createPortal(<BackDrop onClose = {props.onCloseCart}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, portalElement)}
    </Fragment>
}

export default Modal;