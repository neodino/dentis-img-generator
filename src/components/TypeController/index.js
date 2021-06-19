import { Stack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import ImageTypeSelector from './ImageTypeSelector';

const TypeController = () => {
    return (
        <Stack
            spacing={3}
            p={3}
            rounded='xl'
            bg={useColorModeValue('gray.300', 'gray.700')}
        >
            <ImageTypeSelector />
        </Stack>
    );
};

export default TypeController;
