import BackgroundCard from "../UI/BackgroundCard/BackgroundCard";
import PlayerItem from "../UI/card/Playeritem/PlayerItem";
import classes from "./DashBoard.module.css";
import Modal from "../UI/Modal/Modal";
import ModalInside from "../UI/Modal/ModalInside";
import CardWhite from "../UI/card/CardWhite";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../store/Modal/modal-slice";
import Addplayers from "../AddPlayers/AddPlayers";

const DashBoard = () => {
  const isModalOpen = useSelector((state) => state.modal.opened);
  const dispatchModal = useDispatch();
  const DUMMY_PLAYERS = [
    { id: 1, name: "Lui", points: 10, winners: 1, losers: 1 },
    { id: 2, name: "BEN", points: 20, winners: 2, losers: 0 },
    { id: 3, name: "Man", points: 0, winners: 0, losers: 2 },
    { id: 4, name: "Man", points: 0, winners: 0, losers: 2 },
    { id: 5, name: "Man", points: 0, winners: 0, losers: 2 },
    { id: 6, name: "Madsdn", points: 0, winners: 0, losers: 2 },
  ];

  const Players = DUMMY_PLAYERS.map((player) => (
    <PlayerItem
      key={player.id}
      name={player.name}
      points={player.points}
      idd={player.id}
    />
  ));

  const openModalToAddPl = () => {
    dispatchModal(modalActions.open());
  };

  return (
    <BackgroundCard backColor="snow">
      <ul className={`${classes["cont-players"]} contenedor`}>{Players}</ul>
      <div className={classes["cont-add-players"]}>
        <i className="fas fa-plus-circle" onClick={openModalToAddPl}></i>
      </div>

      {isModalOpen && (
        <Modal>
          <ModalInside>
            <CardWhite display="block">
              <Addplayers/>
            </CardWhite>
          </ModalInside>
        </Modal>
      )}
    </BackgroundCard>
  );
};

export default DashBoard;
