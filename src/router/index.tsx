import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "../views/home";
import Document from "../views/document";
import Create from "../views/create";

const Router = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL!;

  return (
    <BrowserRouter>
      <Switch>
        <Route path={`/${BASE_URL}/create`}>
          <Create />
        </Route>
        <Route path={`/${BASE_URL}/:id`}>
          <Document />
        </Route>
        <Route path={`/${BASE_URL}`}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
