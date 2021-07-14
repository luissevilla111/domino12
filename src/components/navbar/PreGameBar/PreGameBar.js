import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../../../store/Modal/modal-slice";
import { authActions } from "../../../store/auth-slice";
import Swal from "sweetalert2";
const PreGameBar = () => {
  const dispatchModal = useDispatch();
  const dispatchUser = useDispatch();
  const gameScreenOpenHandler = () => {
    dispatchModal(modalActions.open());
  };

  const logoutHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will have to login again to see the results ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#ccc",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.value) {
        dispatchUser(authActions.logout());
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("isAdmin",true)
      }
    });
  };

  return (
    <Fragment>
      <li>
        <p onClick={gameScreenOpenHandler} style={{ cursor: "pointer" }}>
          Start new Game
        </p>
      </li>

      <li>
        <p style={{ cursor: "pointer" }} onClick={logoutHandler}>
          log out
        </p>
      </li>
    </Fragment>
  );
};

export default PreGameBar;
