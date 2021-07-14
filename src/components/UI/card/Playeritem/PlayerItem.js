import classes from "./PlayerItem.module.css";
import Button from "../../Buttons/Button";
import imagenPla from "../../../../assets/images/luispla.jpeg";
import { useHistory, useLocation } from "react-router";
import InputPoints from "../../Input/InputPoints";

const PlayerItem = (props) => {
  const history = useHistory();
  const location = useLocation();

  const playerInfoHandler = () => {
    const actualUrl = location.pathname;
    history.push(`${actualUrl}/${props.idd}`);
  };

  return (
    <li className={classes["item-player"]}>
      <div className={classes["card-player-item"]}>
        <div className={classes["title-card-item"]}>
          <p>{props.name}</p>
          <div>
            <p>
              Points: <span>{props.points}</span>
            </p>
          </div>
        </div>

        <div className={classes["image-play"]} onClick={playerInfoHandler}>
          <img src={imagenPla} alt="foto"></img>
        </div>

        <footer className={classes["footer-item-player"]}>
          <form className={classes["form-item-player"]}>
            <label htmlFor={`playerpoints${props.idd}`}>Set New Points</label>
            <div>
              {/* <input
                type="text"
                placeholder="10"
                id={`playerpoints${props.idd}`}
              ></input> */}
              <InputPoints id={`playerpoints${props.idd}`} points={0} />
              <Button>Add</Button>
            </div>
          </form>
        </footer>
      </div>
    </li>
  );
};

export default PlayerItem;
