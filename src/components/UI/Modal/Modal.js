import classes from "./Modal.module.css";
import { useDispatch } from "react-redux";
import {modalActions} from '../../../store/Modal/modal-slice'

const Modal = (props) => {

  const dispatch = useDispatch()

  const closeModalHandler = () =>{
    dispatch(modalActions.close())
  }

  return (
    <div id="myModal" 
      className={classes["modal"]}
      onClick={closeModalHandler}>
      {props.children}
    </div>
  );
};

export default Modal;
