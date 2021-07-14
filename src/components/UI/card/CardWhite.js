import classes from './Card.module.css';

const CardWhite = (props)=>{
    return (
        <div className={classes.card} style={{display:props.display}}>
            {props.children}
        </div>
    )
}

export default CardWhite;