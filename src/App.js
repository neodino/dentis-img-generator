import { Container, Stack } from "@chakra-ui/react";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePagePlaceHolder from "./components/HomePagePlaceholder";
import TypeController from "./components/TypeController";
import Article from "./pages/InstaPost/Article";
import BeforeAfter from "./pages/InstaPost/BeforeAfter";

function App() {
  return (
    <Router>
      <Container as={Stack} spacing={3} maxW='4xl' py={6} px={3} minH='100vh' height='100%'>
        <Header />
        <TypeController />
        <Switch>
          <Route exact path='/'>
            <HomePagePlaceHolder />
          </Route>
          <Route exact path='/article'>
            <Article />
          </Route>
          <Route exact path='/before-after'>
            <BeforeAfter />
          </Route>
          <Route exact path='/promotion'>
            <h1>Акции и скидки</h1>
          </Route>
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
