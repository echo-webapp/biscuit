import HomePage from "./Homepage";
import Landing from "./Landing";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={HomePage} />
    </Switch>
  );
}

export default App;
