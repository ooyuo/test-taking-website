import { BrowserRouter, Switch, Route } from "react-router-dom";
import TestDisplay from "./routes/TestDisplay";
import TestResult from "./routes/TestResult";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/test-taking-website/result/">
            <TestResult />
          </Route>
          <Route path="/test-taking-website/">
            <TestDisplay />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Router;
