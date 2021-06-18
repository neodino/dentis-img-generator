import { Stack } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react';
import Composition from './Composition';
import InputControls from './InputControls';

const Article = () => {

    const [title, setTitle] = useState('');
    const [topic, setTopic] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [fileURL, setFileURL] = useState('');

    const handleImageLoad = (e) => {
        if (e.target.files.length > 0) {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setFileURL(reader.result);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        } else {
            setFileURL('');
        }
        setImageURL('');
    };

    const handleImageURLChange = (val) => {
        setFileURL('');
        setImageURL(val);
        document.getElementById('fileInput').value = '';
    };

    return (
        <Stack
            spacing={3}
            p={3}
            rounded='xl'
            bg={useColorModeValue('white', 'gray.700')}
        >
            <InputControls
                title={title}
                topic={topic}
                setTitle={setTitle}
                setTopic={setTopic}
                handleImageLoad={handleImageLoad}
                imageURL={imageURL}
                fileURL={fileURL}
                setFileURL={setFileURL}
                setImageURL={handleImageURLChange} />
            <Composition title={title} topic={topic} image={(imageURL === '' && fileURL === '') ? '' : (imageURL === '' && fileURL !== '') ? fileURL : imageURL} />
        </Stack>
    );
};

export default Article;
