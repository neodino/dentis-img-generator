import { Stack } from '@chakra-ui/layout';
import { Box, Button, useColorModeValue } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import useCompositionResize from '../../../hooks/useCompositionResize';
import Composition from './Composition';
import InputControls from './InputControls';
import { FiDownload } from "react-icons/fi";
import html2canvas from 'html2canvas';

const Article = () => {

    const [title, setTitle] = useState('');
    const [topic, setTopic] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [fileURL, setFileURL] = useState('');

    const containerRef = useRef(null);

    const handleImageLoad = (e) => {
        if (e.target.files.length > 0) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setFileURL(reader.result);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        } else {
            setFileURL('');
        }
        setImageURL('');
    };

    const handleImageURLChange = (val) => {
        setFileURL('');
        setImageURL(val);
        document.getElementById('fileInput').value = '';
    };

    const [isRendering, setIsRendering] = useState(false);
    const delay = ms => new Promise(res => setTimeout(res, ms));

    const handleRender = async () => {
        setIsRendering(true);
        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";
        const composition = document.getElementById('composition');
        await delay(1000);
        html2canvas(composition,
            {
                width: 1920,
                height: 1920,
                scale: 1
            }
        ).then(function (canvas) {
            document.body.style.overflow = "auto";
            setIsRendering(false);
            var image = canvas.toDataURL("image/jpg");
            var downloadLink = document.createElement("a");
            downloadLink.href = image;
            downloadLink.download = "dentis";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        });
    };

    const { scale, height } = useCompositionResize(containerRef);

    return (
        <Stack
            spacing={3}
            p={3}
            rounded='xl'
            bg={useColorModeValue('white', 'gray.700')}
        >
            <InputControls
                title={title}
                topic={topic}
                setTitle={setTitle}
                setTopic={setTopic}
                handleImageLoad={handleImageLoad}
                imageURL={imageURL}
                fileURL={fileURL}
                setFileURL={setFileURL}
                setImageURL={handleImageURLChange} />
            <Box w='full' h={height} overflow='hidden' ref={containerRef}>
                <Composition scale={isRendering ? 1 : scale} title={title} topic={topic} image={(imageURL === '' && fileURL === '') ? '' : (imageURL === '' && fileURL !== '') ? fileURL : imageURL} />
            </Box>
            <Button leftIcon={<FiDownload />} colorScheme='blue' onClick={() => handleRender()}>Сохранить</Button>
        </Stack>
    );
};

export default Article;
