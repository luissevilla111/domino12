import classes from "./IconNavbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { navBarSiteActions } from "../../../store/navbar/navbaricon-slice";

const IconNavBar = () => {
  const isMenuAct = useSelector((state) => state.navbarSite.opened);
  const dispatchNavbar = useDispatch();
  const menuActiveHandler = () => {
    dispatchNavbar(navBarSiteActions.toggle());
  };

  const classesIcon = `fas fa-arrow-circle-up ${
    !isMenuAct ? classes["i-arrow-menu"] : classes["i-arrow-menu-ani-down"]
  }`;

  const classesDiv = `${classes["cont-icon-menu"]} ${
    isMenuAct ? classes["positionUpper"] : ""
  }`;
  return (
    <div className={classesDiv}>
      <i className={classesIcon} onClick={menuActiveHandler}></i>
    </div>
  );
};

export default IconNavBar;
