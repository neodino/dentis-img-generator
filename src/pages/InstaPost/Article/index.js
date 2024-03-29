import { Stack } from '@chakra-ui/layout';
import { Box, Button, useColorModeValue } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import useCompositionResize from '../../../hooks/useCompositionResize';
import Composition from './Composition';
import InputControls from './InputControls';
import { FiDownload } from "react-icons/fi";
import InputTypeFile from '../../../components/InputTypeFile';
import useCanvasRender from '../../../hooks/useCanvasRender';
import RenderSpinner from '../../../components/RenderSpinner';
import ImageSettings from '../../../components/ImageSettings';

const Article = () => {

    const [title, setTitle] = useState('');
    const [topic, setTopic] = useState('');
    const [fileURL, setFileURL] = useState('');

    const containerRef = useRef(null);

    const { scale, height } = useCompositionResize(containerRef);
    const { handleRender, isRendering } = useCanvasRender();

    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);
    const [bgScale, setBgScale] = useState(1);

    return (
        <Stack
            spacing={3}
            p={3}
            rounded='xl'
            bg={useColorModeValue('gray.300', 'gray.700')}
        >
            <InputTypeFile
                fileURL={fileURL}
                setFileURL={setFileURL} />
            <InputControls
                title={title}
                topic={topic}
                setTitle={setTitle}
                setTopic={setTopic} />
            {fileURL !== '' && <ImageSettings
                posX={posX}
                setPosX={setPosX}
                posY={posY}
                setPosY={setPosY}
                setBgScale={setBgScale}
                bgScale={bgScale} />}
            <Box w='full' h={height} overflow='hidden' ref={containerRef}>
                <Composition
                    bgScale={bgScale}
                    scale={isRendering ? 1 : scale}
                    title={title} topic={topic}
                    image={fileURL ? fileURL : ''}
                    posX={posX}
                    posY={posY} />
            </Box>
            {fileURL !== '' && <Button leftIcon={<FiDownload />} colorScheme='blue' onClick={() => handleRender(1920, 1920)}>Сохранить</Button>}
            <RenderSpinner isRendering={isRendering} />
        </Stack>
    );
};

export default Article;
