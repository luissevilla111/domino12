import classes from "./Formulario.module.css";
import Button from "../../UI/Buttons/Button";
import { Fragment, useRef, useState } from "react";
import useInput from "../../../hooks/useInput";
import { useHistory } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/auth-slice";

import { userActions } from "../../../store/user/user-slice";
import Swal from "sweetalert2/dist/sweetalert2.all";
import withReactContent from "sweetalert2-react-content";

const Formulario = (props) => {
  const firebaseKey = "AIzaSyDUbOhQJN1hugGG6ml9RC2rKNnRC6iRENI";
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseKey}`;

  const databaseFirebaseLink = `https://domino12-3ab16-default-rtdb.firebaseio.com`;
  const history = useHistory();
  const inputNameRef = useRef();
  const inputEmailRef = useRef();
  const inputPwdRef = useRef();

  const MySwal = withReactContent(Swal);

  const AlertBeauty = (title, footer, message, type) => {};

  const dispatchAuth = useDispatch();
  const dispatchUser = useDispatch();

  const [isLogin, setIsLogin] = useState(props.isLogin);

  const {
    inputInfoState: nameState,
    dispatchInputFn: nameDispatch,
    inputChangeTextHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    isNull: isNullName,
  } = useInput();

  const {
    inputInfoState: emailState,
    dispatchInputFn: emailDispatch,
    inputChangeTextHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    isNull: isNullEmail,
  } = useInput();

  const {
    inputInfoState: pwdState,
    dispatchInputFn: pwdDispatch,
    inputChangeTextHandler: pwdChangeHandler,
    inputBlurHandler: pwdBlurHandler,
    isNull: isNullPwd,
  } = useInput();

  const {
    inputInfoState: imageLinkState,
    dispatchInputFn: imageLinkDispatch,
    inputChangeTextHandler: imageLinkChangeHandler,
    inputBlurHandler: imageLinkBlurHandler,
    isNull: isNullimageLink,
  } = useInput();

  if (props.isLogin !== isLogin) {
    nameDispatch({ type: "RESET" });
    emailDispatch({ type: "RESET" });
    pwdDispatch({ type: "RESET" });
    imageLinkDispatch({ type: "RESET" });

    setIsLogin((prevState) => !prevState);
  }

  const UpdateDataBaseUsers = () => {
    const newUser = {
      name: nameState.value,
      email: emailState.value,
      image: imageLinkState.value,
    };

    axios
      .post(`${databaseFirebaseLink}/users.json`, newUser)
      .then((res) => {
        /** add user*/
        Swal.fire({
          title: "Success",
          text: "You are a player",
          footer: "please login",
          icon: "success",
        });
        props.onChangeMode();
      })
      .catch(axiosErrorsHandler);
  };
  const updateUserAfterSignUp = (idToken, photoUrl) => {
    const updateUrl = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${firebaseKey}`;
    axios
      .post(updateUrl, { idToken, photoUrl })
      .then((res) => {
        /** add user*/
        /* console.log("dad" + res); */
        /* console.log(res); */
        UpdateDataBaseUsers();
      })
      .catch(axiosErrorsHandler);
  };

  const signUpHandler = (email, password, displayName, photoUrl) => {
    axios
      .post(url, { email, password, displayName, photoUrl })
      .then((res) => {
        /** add user*/
        /* console.log("dad" + res); */
        const resToken = res.data.idToken;

        updateUserAfterSignUp(resToken, photoUrl);
      })
      .catch(axiosErrorsHandler);
  };

  const loginHandler = (email, password) => {
    const loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseKey}`;
    axios
      .post(loginUrl, { email, password, returnSecureToken: true })
      .then((res) => {
        /**Logged*/

        const token = res.data.idToken;
        const userName = res.data.displayName;
        const userEmail = res.data.email;

        const userLogged = { name: userName, email: userEmail };
        dispatchAuth(authActions.login(token));
        dispatchUser(userActions.setIdentity(userLogged));
        localStorage.setItem("user", JSON.stringify(userLogged));
        localStorage.setItem("token", token);
        history.replace("/gamescreen");
      })
      .catch(axiosErrorsHandler);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!props.isLogin) {
      if (isNullName(nameState.value)) {
        nameDispatch({ type: "EMPTYFIELD" });
        return;
      }
      if (isNullEmail(emailState.value)) {
        emailDispatch({ type: "EMPTYFIELD" });
        return;
      }
      if (isNullPwd(pwdState.value)) {
        pwdDispatch({ type: "EMPTYFIELD" });
        return;
      }

      if (isNullimageLink(imageLinkState.value)) {
        imageLinkDispatch({ type: "EMPTYFIELD" });
        return;
      }

      signUpHandler(
        emailState.value,
        pwdState.value,
        nameState.value,
        imageLinkState.value
      );
    } else {
      if (isNullEmail(emailState.value)) {
        emailDispatch({ type: "EMPTYFIELD" });
        return;
      }
      if (isNullPwd(pwdState.value)) {
        pwdDispatch({ type: "EMPTYFIELD" });
        return;
      }
      loginHandler(emailState.value, pwdState.value);
    }

    /***her all the form is correct */
    /* history.push("/gamescreen"); */
  };

  const axiosErrorsHandler = (error) => {
    if (error.response) {
      console.log("error response");
      console.log(error);
    } else if (error.request) {
      /* console.log("Problem with the request"); */
      console.log("error request");
      console.log(error.response);
    } else {
      console.log("Error", error.response);
    }

    console.log(error);
    Swal.fire({
      title: "Error",
      text: error.message,
      footer: "Try later",
      icon: "error",
    });
    /* console.log("Error", error.message); */
  };

  return (
    <form className={classes["form-signin"]} onSubmit={submitHandler}>
      <div className={classes["formSignin-group"]}>
        <label htmlFor="userEmail">Email Address</label>
        <input
          type="email"
          placeholder="miemail@gmail.com"
          id="userEmail"
          value={emailState.value}
          ref={inputEmailRef}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        ></input>
        {emailState.error.isError && (
          <p className={classes["error-input"]}>{emailState.error.msg}</p>
        )}
      </div>

      {!props.isLogin && (
        <Fragment>
          <div className={classes["formSignin-group"]}>
            <label htmlFor="userName">Name</label>
            <input
              type="text"
              placeholder="pedrito"
              id="userName"
              value={nameState.value}
              ref={inputNameRef}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            ></input>
            {nameState.error.isError && (
              <p className={classes["error-input"]}>{nameState.error.msg}</p>
            )}
          </div>

          <div className={classes["formSignin-group"]}>
            <label htmlFor="userLinkImage">Link image</label>
            <input
              type="text"
              placeholder="https://googlephots..."
              id="userLinkImage"
              value={imageLinkState.value}
              onChange={imageLinkChangeHandler}
              onBlur={imageLinkBlurHandler}
            ></input>
            {imageLinkState.error.isError && (
              <p className={classes["error-input"]}>
                {imageLinkState.error.msg}
              </p>
            )}
          </div>
        </Fragment>
      )}

      <div className={classes["formSignin-group"]}>
        <div className={classes["cont-pwd-info"]}>
          <label htmlFor="userPwd">password</label>
          {props.isLogin && <a href="/">Forgot password</a>}
        </div>

        <input
          type="password"
          placeholder="********"
          id="userPwd"
          value={pwdState.value}
          ref={inputPwdRef}
          onChange={pwdChangeHandler}
          onBlur={pwdBlurHandler}
        ></input>
        {pwdState.error.isError && (
          <p className={classes["error-input"]}>{pwdState.error.msg}</p>
        )}
      </div>
      <div className={classes["cont-button"]}>
        <Button type="submit">{props.isLogin ? "Login" : "Sign Up"}</Button>
      </div>
    </form>
  );
};

export default Formulario;
