import { Stack } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react';
import Composition from './Composition';
import InputControls from './InputControls';

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
            <InputControls title={title} topic={topic} setTitle={setTitle} setTopic={setTopic} />
            <Composition title={title} topic={topic} />
        </Stack>
    );
};

export default Article;
