import { useState } from "react";
import classes from "./StartGame.module.css";
import axios from "axios";

import BackgroundCard from "../UI/BackgroundCard/BackgroundCard";
import Button from "../UI/Buttons/Button";
import CardPlayer from "../UI/card/CardPlayer/CardPlayer";
import CardWhite from "../UI/card/CardWhite";
import ChargeIcon from "../UI/icons/ChargeIcon";
import Modal from "../UI/Modal/Modal";
import ModalInside from "../UI/Modal/ModalInside";

import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { userActions } from "../../store/user/user-slice";

const StartGame = () => {
  const isModalOpen = useSelector((state) => state.modal.opened);
  const [userCardInfo, setUserCardInfo] = useState({
    name: "",
    email: "",
    level: 4,
    desc: "da",
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const registerPlayer = () => {
    axios.post(
      `https://domino12-3ab16-default-rtdb.firebaseio.com/playing.json`,
      {
        email: userCardInfo.email,
        name: userCardInfo.name,
        points: [],
      }
    );
  };

  const goToDashBoardHandler = () => {
    dispatch(userActions.setIsAdmin());
    localStorage.setItem("isAdmin", true);
    registerPlayer();
    history.replace("/gamedashboard");
  };

  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem("user"));
    const userEmailStorage = userStorage.email;

    axios
      .get(
        `https://domino12-3ab16-default-rtdb.firebaseio.com/users.json?orderBy="email"&equalTo="${userEmailStorage}"`
      )
      .then((res) => {
        const userId = Object.keys(res.data)[0];
        const userInfo = res.data[userId];
        /* console.log(userInfo); */

        setUserCardInfo({
          name: userInfo.name,
          email: userInfo.email,
          image: userInfo.image,
          desc: userInfo.desc,
          level: userInfo.level,
        });
      })
      .catch((error) => {
        /* console.log(error); */
      });
  }, []);

  return (
    <BackgroundCard>
      <CardWhite display="block">
        <CardPlayer user={userCardInfo} />
      </CardWhite>
      {isModalOpen && (
        <Modal>
          <ModalInside>
            <div className={classes["game-options"]}>
              <CardWhite display="block">
                <ChargeIcon />
                <h3>Please select an option</h3>
                <div className={classes.actions}>
                  <Button onClick={goToDashBoardHandler}>Create</Button>
                  <Button btnColor="cereise">Join</Button>
                </div>
              </CardWhite>
            </div>
          </ModalInside>
        </Modal>
      )}
    </BackgroundCard>
  );
};

export default StartGame;
