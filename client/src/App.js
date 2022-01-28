import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import PlayerList from "./components/PlayerList";
import AddPlayer from "./components/AddPlayer";
import PlayerStatus from "./views/PlayerStatus";
import Main from "./views/Main";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div>
        <h1><Link to={'/player/list'} >Manage Player</Link> | <Link to={'/status/game/:id'} > Manage Player Status</Link></h1>
      </div>
        <Switch>
          <Main>
            <Route exact path="/addplayer">
              <AddPlayer />
              </Route>
            <Route exact path="/player/list">
              <PlayerList />
            </Route>
            <Route exact path="/status/game/:id">
              <PlayerStatus/>
            </Route>
          </Main>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
