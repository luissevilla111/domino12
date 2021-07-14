import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NavBar from "./components/navbar/Navbar";
import IconNavBar from "./components/UI/IconNavbar/IconNavBar";
import GameScreen from "./pages/GameScreen";
import GameStarted from "./pages/GameStarted";
import PlayerPage from "./pages/PlayerPage";

import { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const isLogged = useSelector((state) => state.auth.isLogged);

  return (
    <Fragment>
      <IconNavBar />
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>

        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          {!isLogged && <Login />}
          {isLogged && <Redirect to="/gamescreen" />}
        </Route>
        <Route path="/gamescreen">
          {isLogged && <GameScreen />}
          {!isLogged && <Redirect to="/login" />}
        </Route>
        <Route path="/gamedashboard" exact>
          {isLogged && <GameStarted />}
          {!isLogged && <Redirect to="/login" />}
        </Route>
        <Route path="/gamedashboard/:id">
          {isLogged && <PlayerPage />}
          {!isLogged && <Redirect to="/login" />}
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
