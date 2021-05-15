import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "../views/home";
import Document from "../views/document";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:id">
          <Document />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
