import { AspectRatio, Box, Center, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Logo from '../../../../img/logo.png';

const Composition = ({ title, topic, image, scale }) => {
    return (
        <Box
            pos='relative'
            width='1920px'
            height='1920px'
            bg='white'
            zIndex={0}
            transformOrigin='0 0'
            id='composition'
            transform={'scale(' + scale + ')'}>
            <Image
                alt='logo'
                src={Logo}
                left='1614px'
                top='70px'
                position='absolute'
                width='241px'
                height='241px'
                zIndex={2} />
            {image === '' && <Center
                left={0}
                right={0}
                bottom={0}
                top={0}
                position='absolute'
                zIndex={1}>
                <Heading as='h3' color='gray' fontSize='60px'>Вставьте ссылку на изображение или выберите файл</Heading>
            </Center>}
            {image !== '' && <AspectRatio
                ratio={1}
                objectFit='cover'
                left={0}
                right={0}
                bottom={0}
                top={0}
                position='absolute'
                zIndex={1}>
                <Image
                    alt='background'
                    src={image} />
            </AspectRatio>}
            <Box
                left='-50px'
                top='123px'
                pos='absolute'
                zIndex={2}
                bg='#079bd7'
                h='104px'
                border='white solid'
                borderWidth='5px'
                borderRadius='100px'
                px='50px'>
                <Text
                    pl='50px'
                    fontSize='60px'
                    fontWeight='bold'
                    textTransform='uppercase'>
                    {topic !== '' ? topic : 'Тема статьи'}
                </Text>
            </Box>
            <Box
                left={0}
                right={0}
                bottom={0}
                pb='50px'
                pt='320px'
                pos='absolute'
                zIndex={2}
                bgGradient="linear(to-t, rgba(7, 155, 215, 1), rgba(255, 255, 255, 0))"
            >
                <Text
                    lineHeight={1}
                    fontSize='134px'
                    textAlign='center'
                    fontWeight='bold'
                    textTransform='uppercase'>
                    {title !== '' ? title : 'Заголовок Статьи'}
                </Text>
            </Box>
        </Box>
    );
};

export default Composition;
