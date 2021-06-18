import { Center, Heading, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const HomePagePlaceholder = () => {
    return (
        <Center
            p={3}
            rounded='xl'
            bg={useColorModeValue('white', 'gray.700')}>
            <Heading as='h3' fontSize='xl'>Выберите шаблон изображения</Heading>
        </Center>
    );
};

export default HomePagePlaceholder;
