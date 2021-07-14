import TRPlayer from "./TRPlayer";
import classes from "./TablePlayer.module.css";

const TablePlayer = (props) => {
  /* const Trows = props.rows.map(row => "asda" )  */
  const data = props.data;
  const points = data[1].points;

  return (
    <table className={classes["table-player"]}>
      <thead>
        <tr>
          <th>#Round</th>
          <th>Points</th>
          {/* <th>wins</th>
          <th>Losers</th> */}
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {points.map((pointsRound, index) => (
          <TRPlayer
            key={index}
            points={pointsRound}
            index={index}
            onUpdatePo={props.onUpdatePo}
            onDeletePo={props.onDeletePo}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TablePlayer;
