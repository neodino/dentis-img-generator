import { Flex, IconButton, Image, Stack, Text, useColorMode } from '@chakra-ui/react';
import { IoInvertMode, IoInvertModeOutline, IoLogoInstagram } from 'react-icons/io5';
import logo from '../../img/logo.png';
import React from 'react';

const Header = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex direction='row' justify='space-between' pb={6} align='center'>
            <Stack direction='row' align='center' spacing={3}>
                <Image src={logo} alt='logo' w='70px' h='70px' />
                <Stack direction='column' align='center' spacing={-1}>
                    <Text fontWeight='semibold' fontSize='22px'>ДЕНТИС</Text>
                    <Text fontWeight='semibold' fontSize='18px'>СТОМАТОЛОГИЯ</Text>
                </Stack>
            </Stack>
            <Stack direction='row' align='center' spacing={3}>
                <IconButton as='a' href='https://www.instagram.com/dentis_pokrovsk/' target='_blank' icon={<IoLogoInstagram />} />
                <IconButton onClick={toggleColorMode} icon={colorMode === "light" ? <IoInvertMode /> : <IoInvertModeOutline />} />
            </Stack>
        </Flex>
    );
};

export default Header;
