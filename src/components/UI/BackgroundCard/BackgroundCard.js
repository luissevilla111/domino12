import classes from "./BackgroundCard.module.css";

const BackgroundCard = (props) => {
  const backcolor = props.backColor
  return (
    <div
      className={`${classes.background} ${classes["background-padding"]} ${classes[backcolor]}`}
    >
      {props.children}
    </div>
  );
};

export default BackgroundCard;
