import { Stack } from '@chakra-ui/layout';
import { Box, Button, useColorModeValue, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import useCompositionResize from '../../../hooks/useCompositionResize';
import Composition from './Composition';
import { FiDownload } from "react-icons/fi";
import useCanvasRender from '../../../hooks/useCanvasRender';
import RenderSpinner from '../../../components/RenderSpinner';
import InputTypeFile from '../../../components/InputTypeFile';
import ImageSettings from '../../../components/ImageSettings';

const BeforeAfter = () => {
    const containerRef = useRef(null);
    const { scale, height } = useCompositionResize(containerRef);

    const [imageBefore, setImageBefore] = useState('');
    const [imageAfter, setImageAfter] = useState('');
    const [bgBeforeScale, setBgBeforeScale] = useState(100);
    const [bgAfterScale, setBgAfterScale] = useState(100);
    const [posXBefore, setPosXBefore] = useState(50);
    const [posYBefore, setPosYBefore] = useState(50);
    const [posXAfter, setPosXAfter] = useState(50);
    const [posYAfter, setPosYAfter] = useState(50);

    const { handleRender, isRendering } = useCanvasRender();

    return (
        <Stack
            spacing={3}
            p={3}
            rounded='xl'
            bg={useColorModeValue('gray.300', 'gray.700')}
        >
            <Tabs>
                <TabList>
                    <Tab>До</Tab>
                    <Tab>После</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel px={0} as={Stack} spacing={3}>
                        <InputTypeFile
                            fileURL={imageBefore}
                            setFileURL={setImageBefore} />
                        {imageBefore !== '' && <ImageSettings
                            posX={posXBefore}
                            setPosX={setPosXBefore}
                            posY={posYBefore}
                            setPosY={setPosYBefore}
                            setBgScale={setBgBeforeScale}
                            bgScale={bgBeforeScale} />}
                    </TabPanel>
                    <TabPanel px={0} as={Stack} spacing={3}>
                        <InputTypeFile
                            fileURL={imageAfter}
                            setFileURL={setImageAfter} />
                        {imageAfter !== '' && <ImageSettings
                            posX={posXAfter}
                            setPosX={setPosXAfter}
                            posY={posYAfter}
                            setPosY={setPosYAfter}
                            setBgScale={setBgAfterScale}
                            bgScale={bgAfterScale} />}
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Box w='full' h={height} overflow='hidden' ref={containerRef}>
                <Composition
                    scale={isRendering ? 1 : scale}
                    imageBefore={imageBefore}
                    imageAfter={imageAfter}
                    bgBeforeScale={bgBeforeScale}
                    bgAfterScale={bgAfterScale}
                    posXBefore={posXBefore}
                    posYBefore={posYBefore}
                    posXAfter={posXAfter}
                    posYAfter={posYAfter} />
            </Box>
            <Button leftIcon={<FiDownload />} colorScheme='blue' onClick={() => handleRender(1920, 1920)}>Сохранить</Button>
            <RenderSpinner isRendering={isRendering} />
        </Stack>
    );
};

export default BeforeAfter;
