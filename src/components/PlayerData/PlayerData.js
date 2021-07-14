import BackgroundCard from "../UI/BackgroundCard/BackgroundCard";
import TablePlayer from "../UI/Table/TablePlayer";
import { useParams } from "react-router";
import CardWhite from "../UI/card/CardWhite";
import classes from "./PlayerData.module.css";
import Button from "../UI/Buttons/Button";

const PlayerData = () => {
  /* const {id} =  useParams() //use to consult the database */
  const DUMMY_DATA = {
    1: { name: "luis", points: [0, 10, 5, 10, 5, 2, 0, 5, 10, 10] },
  };

  const updatePointsHanlder = (index) => {
    alert("update " + index);
  };

  const deletePointsHandler = (index) => {
    alert("delete " + index);
  };
  return (
    <BackgroundCard>
      <CardWhite display="block">
        <div className={classes["cont-table"]}>
          <h3>
            {DUMMY_DATA[1].name}: <span>320</span>{" "}
          </h3>

          <TablePlayer
            data={DUMMY_DATA}
            onUpdatePo={updatePointsHanlder}
            onDeletePo={deletePointsHandler}
          />
          <div className={classes.controls}>
            <Button btnColor="red">Delete ALL </Button>
          </div>
        </div>
      </CardWhite>
    </BackgroundCard>
  );
};

export default PlayerData;
