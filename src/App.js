import { useEffect } from "react";
import HomePage from "./Homepage";
import Landing from "./Landing";
import { Route, Switch } from "react-router-dom";
import Window from "./Hooks/Window";
import MobileScreen from "./MobileScreen";
function App() {
  const windowDimensions = Window();

  useEffect(() => {
    console.log(windowDimensions.width);
  }, [windowDimensions]);
  if (windowDimensions.width < 700) {
    return <MobileScreen />;
  } else
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home/:id" component={HomePage} />
      </Switch>
    );
}

export default App;
