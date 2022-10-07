import { BrowserRouter, Switch, Route } from "react-router-dom";
import TestDisplay from "./routes/TestDisplay";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/test-talking-website/:testId">
            <TestDisplay />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Router;
