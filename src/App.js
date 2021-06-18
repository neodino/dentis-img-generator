import { Container } from "@chakra-ui/react";
import React from "react";
import InputController from "./components/InputController";

function App() {
  return (
    <Container maxW='4xl' p={6}>
      <InputController />
    </Container>
  );
}

export default App;
