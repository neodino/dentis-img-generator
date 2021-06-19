import { Box, Center, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { IoIosImages } from 'react-icons/io';
import Logo from '../../../../img/logo.png';

const Composition = ({
    imageBefore,
    imageAfter,
    bgBeforeScale,
    bgAfterScale,
    posXBefore,
    posYBefore,
    posXAfter,
    posYAfter,
    scale }
) => {
    return (
        <Box
            pos='relative'
            width='1920px'
            height='1920px'
            zIndex={0}
            transformOrigin='0 0'
            id='composition'
            transform={'scale(' + scale + ')'}>
            <Box
                position='absolute'
                left={0}
                top={0}
                right={0}
                h='973px'
                border='25px white solid'
                zIndex={2}
                bg={imageBefore ? ('url(' + imageBefore + ')') : 'white'}
                bgPos={posXBefore + '% ' + posYBefore + '%'}
                bgSize={bgBeforeScale !== 'cover' ? (bgBeforeScale + '%') : bgBeforeScale}>
            </Box>
            {imageBefore === '' && <Center
                flexDirection='column'
                left={0}
                right={0}
                h='973px'
                top={0}
                position='absolute'
                zIndex={2}>
                <IoIosImages color='gray' fontSize='120px' />
                <Heading as='h3' color='gray' fontSize='60px'>Выберите файл изображения</Heading>
            </Center>}
            <Box
                position='absolute'
                left={0}
                bottom={0}
                right={0}
                h='973px'
                border='25px white solid'
                zIndex={2}
                bg={imageAfter ? ('url(' + imageAfter + ')') : 'white'}
                bgPos={posXAfter + '% ' + posYAfter + '%'}
                bgSize={bgAfterScale !== 'cover' ? (bgAfterScale + '%') : bgAfterScale}>
            </Box>
            {imageAfter === '' && <Center
                flexDirection='column'
                left={0}
                right={0}
                h='973px'
                bottom={0}
                position='absolute'
                zIndex={2}>
                <IoIosImages color='gray' fontSize='120px' />
                <Heading as='h3' color='gray' fontSize='60px'>Выберите файл изображения</Heading>
            </Center>}
            <Image
                alt='logo'
                src={Logo}
                left='1614px'
                top='70px'
                position='absolute'
                width='241px'
                height='241px'
                zIndex={2} />
            <Box
                left='-50px'
                top='751px'
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
                    до
                </Text>
            </Box>
            <Box
                left='-50px'
                top='1706px'
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
                    после
                </Text>
            </Box>
        </Box>
    );
};

export default Composition;
