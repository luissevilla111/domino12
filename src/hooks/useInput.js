import { useReducer } from "react";

const dispatchInput = (state, action) => {
  if (action.type === "EMPTYFIELD") {
    return {
      value: "",
      error: { isError: true, msg: "`this field can't not be empty`" },
    };
  }

  if (action.type === "UPDATEVALUE") {
    return {
      value: action.text,
      error: { isError: false, msg: "" },
    };
  }

  if (action.type === "KEEPVALUE") {
    return {
      value: state.value,
      error: { isError: false, msg: "" },
    };
  }

  if (action.type === "RESET") {
    return {
      value: "",
      error: { isError: false, msg: "" },
    };
  }

  return { value: "", error: { isError: false, msg: "" } };
};

const isNull = (value) => {
  if (value.trim().length === 0) {
    return true;
  }

  return false;
};

const useInput = () => {
  const initialValueInputState = {
    value: "",
    error: { isError: false, msg: "" },
  };

  const [inputInfoState, dispatchInputFn] = useReducer(
    dispatchInput,
    initialValueInputState
  );

  const inputChangeTextHandler = (event) => {
    const val = event.target.value;

    if (isNull(val)) {
      dispatchInputFn({ type: "EMPTYFIELD" });
    } else {
      dispatchInputFn({ type: "UPDATEVALUE", text: val });
    }
  };

  const inputBlurHandler = () => {
    if (isNull(inputInfoState.value)) {
      dispatchInputFn({ type: "EMPTYFIELD" });
    } else {
      dispatchInputFn({ type: "KEEPVALUE" });
    }
  };

  return {
    inputInfoState,
    dispatchInputFn,
    inputChangeTextHandler,
    inputBlurHandler,
    isNull,
  };
};

export default useInput;
