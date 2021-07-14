import classes from "./InfoPlayer.module.css";

const InfoPlayer = (props) => {

    let classesCard = `${classes["mini-card"]} `
  switch (props.tipo) {
      
    case 1:
        classesCard += `${classes.tipo1}`;
      break;

    case 2:
      break;

    case 3:
        classesCard += `${classes.tipo3}`;
      break;

      default:
  }
  return (
    <div className={classesCard}>
      <h4>{props.quantity}</h4>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default InfoPlayer;
