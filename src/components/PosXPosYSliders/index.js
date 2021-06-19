import React from 'react';
import {
    Center,
    Grid,
    GridItem,
    IconButton,
    Stack,
} from "@chakra-ui/react";
import { AiOutlineZoomIn, AiOutlineZoomOut, AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp } from 'react-icons/ai';
import { MdCenterFocusStrong, MdZoomOutMap } from 'react-icons/md';

const PosXPosYSliders = ({ posX, posY, setPosX, setPosY, bgScale, setBgScale }) => {

    const handlePosReset = () => {
        setPosX(0);
        setPosY(0);
    };

    return (
        <Stack spacing={6} direction='row'>
            <Center w='50%' flexDir='column' fontWeight='semibold' textAlign='center'>
                Позиция изображения
                <Grid mt={6} templateRows='repeat(3, 1fr)' templateColumns='repeat(3, 1fr)' w='min' gridGap={2}>
                    <GridItem colStart={1} rowStart={2}>
                        <IconButton onClick={() => setPosX(posX - 30)} icon={<AiOutlineArrowLeft />} />
                    </GridItem>
                    <GridItem colStart={2} rowStart={1}>
                        <IconButton onClick={() => setPosY(posY - 30)} icon={<AiOutlineArrowUp />} />
                    </GridItem>
                    <GridItem colStart={2} rowStart={2}>
                        <IconButton onClick={() => handlePosReset()} icon={<MdCenterFocusStrong />} />
                    </GridItem>
                    <GridItem colStart={3} rowStart={2}>
                        <IconButton onClick={() => setPosX(posX + 30)} icon={<AiOutlineArrowRight />} />
                    </GridItem>
                    <GridItem colStart={2} rowStart={3}>
                        <IconButton onClick={() => setPosY(posY + 30)} icon={<AiOutlineArrowDown />} />
                    </GridItem>
                </Grid>
            </Center>
            <Center w='50%' flexDir='column' fontWeight='semibold' textAlign='center'>
                Масштаб изображения
                <Grid mt={6} templateRows='repeat(3, 1fr)' templateColumns='repeat(1, 1fr)' w='min' gridGap={2}>
                    <GridItem colStart={1} rowStart={1}>
                        <IconButton onClick={() => setBgScale(bgScale + 0.1)} icon={<AiOutlineZoomIn />} />
                    </GridItem>
                    <GridItem colStart={1} rowStart={2}>
                        <IconButton onClick={() => setBgScale(1)} icon={<MdZoomOutMap />} />
                    </GridItem>
                    <GridItem colStart={1} rowStart={3}>
                        <IconButton onClick={() => setBgScale(bgScale - 0.1)} icon={<AiOutlineZoomOut />} />
                    </GridItem>
                </Grid>
            </Center>
        </Stack>
    );
};

export default PosXPosYSliders;
