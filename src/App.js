import InstaPost from "./components/InstaPost";
import { Container, Box, Input, Button, Center } from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";
import { FiDownload } from 'react-icons/fi'
import axios from 'axios'
import { renderToString } from 'react-dom/server'

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

  const outerHTML = renderToString(
    <InstaPost
      title={title}
      topic={topic}
      image={imgURL}
      scale={1}
    />
  )

  const createImage = async () => {
    const payload = {
      html: outerHTML,
      css: ".NNdpA{left:0;width:1920px;height:1920px;position:relative;font-family'Open Sans',sans-serif;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);background:#e5e5e5;}.kAWPxB{left:0;width:1920px;height:1920px;position:relative;font-family:'Open Sans',sans-serif;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);background:#e5e5e5;}.hvAhMZ{left:0;width:1920px;height:1920px;position:relative;font-family:'Open Sans',sans-serif;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(0.3541666666666667);-ms-transform:scale(0.3541666666666667);transform:scale(0.3541666666666667);background:#e5e5e5;}.hWdSLQ{left:0;width:1920px;height:1920px;position:relative;font-family:'Open Sans',sans-serif;-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);background:#e5e5e5;}.dCSnYI{width:100%;height:100%;object-fit:cover;z-index:1;}.fxtZAK{left:1614px;top:70px;position:absolute;width:241px;height:241px;z-index:3;-webkit-filter:drop-shadow(0px 0px 40px rgba(0,0,0,0.4));}.dhxfaJ{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#079bd7;text-align:left;left:0px;top:123px;position:absolute;width:auto;height:104px;z-index:4;border-radius:0 54px 54px 0;border:5px solid #ffffff;border-left:none;box-shadow:0px 0px 40px rgba(0,0,0,0.4);}.cBiKmu{font-weight:700;color:#ffffff;font-size:60px;text-transform:uppercase;line-height:0.94;padding-left:50px;padding-right:50px;}.dXefcL{position:absolute;left:0;bottom:0;z-index:7;height:auto;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-bottom:50px;background:linear-gradient( 0deg, rgba(7,155,215,1) 25%, rgba(255,255,255,0) 100% );}.cEVcIm{text-align:center;font-weight:700;color:#ffffff;font-size:110px;text-transform:uppercase;line-height:1.1;padding-left:50px;padding-right:50px;padding-top:150px;}"
    };

    let headers = {
      auth: {
        username: '6d1a1033-8547-46bd-baf6-2f528571d78e',
        password: 'c6c193bb-77be-4ea6-8bec-b2b04f588311'
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const response = await axios.post('https://hcti.io/v1/image', JSON.stringify(payload), headers);
      window.open(response.data.url, '_blank');
    } catch (error) {
      console.error(error);
    }
  }

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
        <Button onClick={createImage} leftIcon={<FiDownload />} colorScheme="red">Сохранить</Button>
      </Center>
    </Container>
  );
}

export default App;
