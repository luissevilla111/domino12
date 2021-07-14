import classes from './ModalInside.module.css'
const ModalInside = (props) =>{

    const stopPropagationHandler = (e) =>{
        e.stopPropagation();
    }
    return (
        <div className={classes.insideModal} onClick={stopPropagationHandler}>
            {props.children}
        </div>
    )
}

export default ModalInside