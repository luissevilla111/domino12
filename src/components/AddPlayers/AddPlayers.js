import Button from "../UI/Buttons/Button";
import classes from "./AddPlayers.module.css";
import Select from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Addplayers = () => {
  return (
    <div>
      <form className={classes["form-add-pla"]}>
        <label>Select Players to Add </label>
        <Select options={options} isMulti name="colors" className="select-players"/>
        <label> Write an invited</label>
        <div className={classes['cont-write-new']}>
          <input type="text"></input>
          <Button>Add</Button>
        </div>
      </form>
    </div>
  );
};

export default Addplayers;
