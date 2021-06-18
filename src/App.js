import { Container } from "@chakra-ui/react";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import InputController from "./components/InputController";

function App() {
  return (
    <Router>
      <Container maxW='4xl' p={6}>
        <InputController />
        <Switch>
          <Route exact path='/'>
            <h1>Статья</h1>
          </Route>
          <Route exact path='/before-after'>
            <h1>До / После</h1>
          </Route>
          <Route exact path='/promotion'>
            <h1>Акции и скидки</h1>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
