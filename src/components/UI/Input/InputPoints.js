import { useState } from "react";

const InputPoints = (props) => {
  const [points, setPoints] = useState(props.points);

  const validationOnlyNumbers = (e) => {
    const newPoints = e.target.value;
    const numbers = /^[0-9]+$/;
    if (newPoints.match(numbers)) {
      setPoints(newPoints);
    }
  };

  return (
    <input
      type="text"
      id={props.id}
      value={points}
      onChange={validationOnlyNumbers}
    ></input>
  );
};

export default InputPoints;
