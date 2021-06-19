import { Center, Heading, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const HomePagePlaceholder = () => {
    return (
        <Center
            flex='100%'
            p={3}
            rounded='xl'
            bg={useColorModeValue('gray.300', 'gray.700')}>
            <Heading textAlign='center' as='h3' fontSize='xl'>Выберите шаблон изображения</Heading>
        </Center>
    );
};

export default HomePagePlaceholder;
