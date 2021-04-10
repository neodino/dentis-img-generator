import { Container, Box, Input, Button, Center } from "@chakra-ui/react";
import React, { useState, useRef, useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import logoDentis from "../src/images/logo.png";

function App() {
  const canvasRef = useRef(null);
  const widthRef = useRef(null);

  // changing title
  const [title, setTitle] = useState("ЗАГОЛОВОК");
  // changing topic
  const [topic, setTopic] = useState("ТЕМА");

  const downloadCanvas = () => {
    var image = canvasRef.current.toDataURL("image/jpg");
    var downloadLink = document.createElement("a");
    downloadLink.href = image;
    downloadLink.download = "dentis";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const [logo, setLogo] = useState(null);
  useEffect(() => {
    const logoObj = new Image();
    logoObj.src = logoDentis;
    logoObj.onload = () => setLogo(logoObj);
  }, []);

  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImageURL(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    const imageObj = new Image();
    imageObj.src = imageURL;
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, ctx.width, ctx.height);
    imageObj.onload = () => setImage(imageObj);
  }, [imageURL]);

  // function for wrapping title text
  const textWrap = (text) => {
    const ctx = canvasRef.current.getContext("2d");
    var maxWidth = 1820;
    var lines = [];
    var width = 0,
      i,
      j;
    var result;
    var fontSize = 110;
    ctx.font = fontSize + "px Open Sans";
    ctx.textAlign = "center";

    while (text.length) {
      for (
        i = text.length;
        ctx.measureText(text.substr(0, i)).width > maxWidth;
        i--
      );

      result = text.substr(0, i);

      if (i !== text.length)
        for (
          j = 0;
          result.indexOf(" ", j) !== -1;
          j = result.indexOf(" ", j) + 1
        );

      lines.unshift(result.substr(0, j || result.length));
      width = Math.max(width, ctx.measureText(lines[lines.length - 1]).width);
      text = text.substr(lines[lines.length - 1].length, text.length);
    }

    var gradient = ctx.createLinearGradient(
      960,
      1920,
      960,
      1920 - (400 + 110 * lines.length)
    );
    gradient.addColorStop(0, "rgba(7, 155, 215, 1)");
    gradient.addColorStop(0.25, "rgba(7, 155, 215, 1)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(
      0,
      1920 - (400 + 110 * lines.length),
      1920,
      400 + 110 * lines.length
    );

    ctx.fillStyle = "white";
    var lineStart = 1840;
    for (i = 0; i < lines.length; i++) {
      lineStart = lineStart - (fontSize + 5) * i;
      ctx.fillText(lines[i], 960, lineStart);
    }
  };
  // function for creating rounded rect on canvas
  const roundRect = (x0, y0, x1, y1, r, color) => {
    const ctx = canvasRef.current.getContext("2d");
    var w = x1 - x0;
    var h = y1 - y0;
    if (r > w / 2) r = w / 2;
    if (r > h / 2) r = h / 2;
    ctx.beginPath();
    ctx.moveTo(x1 - r, y0);
    ctx.quadraticCurveTo(x1, y0, x1, y0 + r);
    ctx.lineTo(x1, y1 - r);
    ctx.quadraticCurveTo(x1, y1, x1 - r, y1);
    ctx.lineTo(x0 + r, y1);
    ctx.quadraticCurveTo(x0, y1, x0, y1 - r);
    ctx.lineTo(x0, y0 + r);
    ctx.quadraticCurveTo(x0, y0, x0 + r, y0);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  };

  useEffect(() => {
    const drawImageProp = (ctx, img, x, y, w, h, offsetX, offsetY) => {
      if (arguments.length === 2) {
        x = y = 0;
        w = 1920;
        h = 1920;
      }

      offsetX = typeof offsetX === "number" ? offsetX : 0.5;
      offsetY = typeof offsetY === "number" ? offsetY : 0.5;

      var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,
        nh = ih * r,
        cx,
        cy,
        cw,
        ch,
        ar = 1;

      if (nw < w) ar = w / nw;
      if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;
      nw *= ar;
      nh *= ar;

      cw = iw / (nw / w);
      ch = ih / (nh / h);

      cx = (iw - cw) * offsetX;
      cy = (ih - ch) * offsetY;

      if (cx < 0) cx = 0;
      if (cy < 0) cy = 0;
      if (cw > iw) cw = iw;
      if (ch > ih) ch = ih;

      ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
    };

    if (image && canvasRef) {
      const ctx = canvasRef.current.getContext("2d");

      ctx.font = "60px Open Sans";
      var txtW = ctx.measureText(topic).width + 100;

      drawImageProp(ctx, image);
      ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
      ctx.shadowBlur = 80;
      ctx.drawImage(logo, 1614, 70);
      roundRect(-57, 123, txtW + 5, 227, 57, "white");
      ctx.shadowColor = "rgba(0, 0, 0, 0)";
      roundRect(-52, 128, txtW, 222, 52, "#079bd7");
      ctx.textAlign = "left";
      ctx.fillStyle = "white";
      ctx.fillText(topic, 50, 195);
      textWrap(title);
    }
  }, [image, canvasRef, topic, logo, title]);

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
  }, [squareWidth]);

  const styles = {
    transformOrigin: "0 0",
    transform: "scale(" + containerScale + ")",
  };

  return (
    <Container maxW="4xl" py="6">
      <Box boxShadow="2xl" rounded="xl" p="6" bg="white">
        <Input
          type={"file"}
          mb="3"
          border={"none"}
          onChange={imageHandler}
          accept="image/jpeg"
        />
        <Input
          placeholder="Заголовок"
          mb="3"
          onChange={(e) => setTitle(e.target.value.toUpperCase())}
        />
        <Input
          placeholder="Тема"
          onChange={(e) => setTopic(e.target.value.toUpperCase())}
        />
      </Box>
      <Box boxShadow="2xl" rounded="xl" p="6" bg="white" mt="6">
        <Box
          w="100%"
          h={squareWidth}
          overflow="hidden"
          boxShadow="outline"
          ref={widthRef}
        >
          <canvas width={1920} height={1920} ref={canvasRef} style={styles} />
        </Box>
      </Box>
      <Center mt="6">
        <Button
          onClick={downloadCanvas}
          leftIcon={<FiDownload />}
          colorScheme="red"
        >
          Сохранить
        </Button>
      </Center>
    </Container>
  );
}

export default App;
