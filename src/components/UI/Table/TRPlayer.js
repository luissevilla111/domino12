import InputPoints from "../Input/InputPoints";

const TRPlayer = (props) => {
  /* const [points, setPoints] = useState(props.points); */

  /* const changePointsHandler = (e) => {
    const newPoints = e.target.value;
    const numbers = /^[0-9]+$/;
    if (newPoints.match(numbers)) {
      setPoints(newPoints);
    }
  }; */

  return (
    <tr>
      <td>{props.index + 1}</td>

      <td>
        {/* <input
          type="text"
          id={`points${props.index}`}
          value={points}
          onChange={changePointsHandler}
        ></input> */}
        <InputPoints id={`points${props.index}`} points={props.points} />
      </td>
      {/* para cuando no eres admin<td>{props.points}</td> */}
      {/* <td>
        <input type="checkbox" id={`cboxwinners${props.index}`} value="w" />
        <br />
      </td>
      <td>
        <input type="checkbox" id={`cboxloser${props.index}`} value="l" />
        <br />
      </td> */}
      <td>
        <i
          className="far fa-save"
          style={{ color: "purple" }}
          onClick={props.onUpdatePo.bind(null, props.index)}
        ></i>
      </td>
      <td>
        <i
          className={`fas fa-trash`}
          onClick={props.onDeletePo.bind(null, props.index)}
          /* style={{ color: "#ff0066" }} */
        ></i>
      </td>
    </tr>
  );
};

export default TRPlayer;
