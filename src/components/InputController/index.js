import { Stack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import ImageTypeSelector from './ImageTypeSelector';

const InputController = () => {
    return (
        <Stack
            spacing={3}
            p={3}
            rounded='xl'
            bg={useColorModeValue('white', 'gray.700')}
        >
            <ImageTypeSelector />
        </Stack>
    );
};

export default InputController;
