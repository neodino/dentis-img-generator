import { Stack } from '@chakra-ui/layout';
import { FormControl, FormLabel, IconButton, Input, InputGroup, InputRightElement, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import Composition from './Composition';

const Article = () => {

    const [title, setTitle] = useState('');
    const [topic, setTopic] = useState('');

    return (
        <Stack
            spacing={3}
            p={3}
            rounded='xl'
            bg={useColorModeValue('white', 'gray.700')}
        >
            <FormControl>
                <FormLabel>Заголовок статьи</FormLabel>
                <InputGroup>
                    <Input variant='filled' value={title} placeholder='Введите текст...' onChange={e => setTitle(e.target.value)} />
                    {title !== '' && <InputRightElement
                        children={<IconButton
                            variant='ghost'
                            colorScheme='red'
                            icon={<MdClose />}
                            onClick={() => setTitle('')}></IconButton>} />}
                </InputGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Тема статьи</FormLabel>
                <InputGroup>
                    <Input variant='filled' value={topic} placeholder='Введите текст...' onChange={e => setTopic(e.target.value)}></Input>
                    {topic !== '' && <InputRightElement
                        children={<IconButton
                            variant='ghost'
                            colorScheme='red'
                            icon={<MdClose />}
                            onClick={() => setTopic('')}></IconButton>} />}
                </InputGroup>
            </FormControl>

            <Composition title={title} topic={topic} />
        </Stack>
    );
};

export default Article;
