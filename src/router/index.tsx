import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "../views/home";
import Document from "../views/document";
import Create from "../views/create";

const Router = () => {
  const baseUrl = "/markdown-collab";
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`${baseUrl}/create`}>
          <Create />
        </Route>
        <Route path={`${baseUrl}/:id`}>
          <Document />
        </Route>
        <Route path={`${baseUrl}/`}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
