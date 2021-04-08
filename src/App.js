import InstaPost from "./components/InstaPost";
import { Container, Box, Input, Button, Center } from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";

function App() {
  const [title, setTitle] = useState("Заголовок");
  const ChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const [topic, setTopic] = useState("Тема");
  const ChangeTopic = (e) => {
    setTopic(e.target.value);
  };
  const [imgURL, setImgURL] = useState("");
  const ChangeImage = (e) => {
    setImgURL(e.target.value);
  };

  const widthRef = useRef(null);
  const [squareWidth, setSquareWidth] = useState(0);
  const [containerScale, setContainerScale] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setSquareWidth(widthRef.current ? widthRef.current.offsetWidth : 0);
      setContainerScale(squareWidth / 1920);
    };

    if (widthRef.current) {
      setSquareWidth(widthRef.current ? widthRef.current.offsetWidth : 0);
      setContainerScale(squareWidth / 1920);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [squareWidth, containerScale]);

  return (
    <Container maxW="4xl" py="6">
      <Box boxShadow="2xl" rounded="xl" p="6" bg="white">
        <Input placeholder="Ссылка на картинку" mb="3" onChange={ChangeImage} />
        <Input placeholder="Заголовок" mb="3" onChange={ChangeTitle} />
        <Input placeholder="Тема" onChange={ChangeTopic} />
      </Box>
      <Box boxShadow="2xl" rounded="xl" p="6" bg="white" mt="6">
        <Box
          w="100%"
          h={squareWidth}
          overflow="hidden"
          boxShadow="outline"
          ref={widthRef}
        >
          <InstaPost
            title={title}
            topic={topic}
            image={imgURL}
            scale={containerScale}
          ></InstaPost>
        </Box>
      </Box>
      <Center mt="6">
        <Button colorScheme="red">Сохранить</Button>
      </Center>
    </Container>
  );
}

export default App;
