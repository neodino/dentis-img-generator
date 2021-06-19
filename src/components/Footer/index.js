import { Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
    return (
        <>
            <Text textAlign='center' fontWeight='semibold'>
                Генератор постов Дентис - 2021
            </Text>
            <Text textAlign='center' fontWeight='semibold'>
                Дизайн и разработка - <Text as='a' textDecoration='underline' href='https://stepanpavlov.com' target="_blank">Stepan Pavlov</Text>
            </Text>
        </>
    );
};

export default Footer;
