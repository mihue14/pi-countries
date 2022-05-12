import { BrowserRouter, Route, Switch } from "react-router-dom";
import ActivityCreate from "./components/ActivityCreate";
import Details from "./components/Details";
import Home from "./components/Home";
import LandingPage from './components/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/detail/:id" component={Details} />
        <Route path="/create" component={ActivityCreate} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
