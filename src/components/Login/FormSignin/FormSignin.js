import { Fragment, useState } from "react";
import classes from "./FormSignin.module.css";
import Formulario from "../Formulario/Formulario";
const FormSignin = () => {
  const [isLogin, setIsLogin] = useState(true);

  const changeModeHandler = () => {
    setIsLogin((prevState) => {
      return !prevState;
    });
  };

  const titleform = isLogin ? "Login" : "Sign Up";

  const subTitleForm = isLogin
    ? `Doesn't have an account yet ? `
    : " Do you Have and account, please ";
  const linkText = !isLogin ? "Login" : "Sign Up";
  return (
    <Fragment>
      <div className={classes["cont-form-sign"]}>
        <h3>{titleform}</h3>
        <p>
          {subTitleForm}
          <span onClick={changeModeHandler}>{linkText}</span>
        </p>
        <Formulario isLogin={isLogin} onChangeMode={changeModeHandler} />
      </div>
      <div className={classes["cont-img-form"]}>{/* <h2>Good Luck</h2> */}</div>
    </Fragment>
  );
};

export default FormSignin;
