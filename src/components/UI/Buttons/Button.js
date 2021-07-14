import classes from "./Button.module.css";

const Button = (props) => {

  const buttonClasses = `${classes.button} ${classes[props.btnColor]}`
  return (
    <button
      className={buttonClasses}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
