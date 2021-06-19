import { FormControl, FormLabel, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React from 'react';
import { MdClose } from 'react-icons/md';

const InputControls = ({ title, setTitle, topic, setTopic }) => {

    return (
        <>
            <FormControl>
                <FormLabel>Заголовок статьи</FormLabel>
                <InputGroup>
                    <Input type='text' variant='filled' value={title} placeholder='Введите текст...' onChange={e => setTitle(e.target.value)} />
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
                    <Input type='text' variant='filled' value={topic} placeholder='Введите текст...' onChange={e => setTopic(e.target.value)}></Input>
                    {topic !== '' && <InputRightElement
                        children={<IconButton
                            variant='ghost'
                            colorScheme='red'
                            icon={<MdClose />}
                            onClick={() => setTopic('')}></IconButton>} />}
                </InputGroup>
            </FormControl>
        </>
    );
};

export default InputControls;
