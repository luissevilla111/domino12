import classes from "./CardPlayer.module.css";
import InfoPlayer from "./InfoPlayer";
import photo from "../../../../assets/images/luispla.jpeg";

const CardPlayer = (props) => {
  const cardClassesCont = `${classes["card-content"]} contenedor`;
  return (
    <div className={classes.card}>
      <div className={classes["card-img"]}>
        <img src={props.user.image} alt="imagehere"/>
      </div>

      <div className={cardClassesCont}>
        <div>
          <p>level {props.user.level}</p>
          <h3>{props.user.name}</h3>
          <p>
            {props.user.desc}
          </p>
        </div>
      </div>

      <div className={classes["card-powers-level"]}>
        <InfoPlayer subtitle="Winners" quantity={90} tipo={1} />
        <InfoPlayer subtitle="losers" quantity={90} tipo={2} />
        <InfoPlayer subtitle="Total $" quantity={90} tipo={3} />
      </div>
    </div>
  );
};

export default CardPlayer;
