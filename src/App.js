import { Container, Stack } from "@chakra-ui/react";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePagePlaceHolder from "./components/HomePagePlaceholder";
import TypeController from "./components/TypeController";
import Article from "./pages/InstaPost/article";

function App() {
  return (
    <Router>
      <Container as={Stack} spacing={3} maxW='4xl' py={6} px={3}>
        <TypeController />
        <Switch>
          <Route exact path='/'>
            <HomePagePlaceHolder />
          </Route>
          <Route exact path='/article'>
            <Article />
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
