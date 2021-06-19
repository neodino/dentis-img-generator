import React from 'react';
import {
    Box,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Stack,
} from "@chakra-ui/react";

const PosXPosYSliders = ({ posX, posY, setPosX, setPosY }) => {
    return (
        <Stack spacing={6}>
            <Box flex="1" textAlign="left" fontWeight='semibold'>
                Горизонтальная позиция
            </Box>
            <Stack direction='row'>
                <Box>
                    0%
                </Box>
                <Slider defaultValue={50} min={0} max={100} step={5} colorScheme='blue' onChange={(val) => setPosX(val)}>
                    <SliderTrack>
                        <Box position="relative" right={10} />
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb boxSize={9} color='black'>
                        {posX}
                    </SliderThumb>
                </Slider>
                <Box>
                    100%
                </Box>
            </Stack>
            <Box flex="1" textAlign="left" fontWeight='semibold'>
                Вертикальная позиция
            </Box>
            <Stack direction='row'>
                <Box>
                    0%
                </Box>
                <Slider defaultValue={50} min={0} max={100} step={5} colorScheme='blue' onChange={(val) => setPosY(val)}>
                    <SliderTrack>
                        <Box position="relative" right={10} />
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb boxSize={9} color='black'>
                        {posY}
                    </SliderThumb>
                </Slider>
                <Box>
                    100%
                </Box>
            </Stack>
        </Stack>
    );
};

export default PosXPosYSliders;
