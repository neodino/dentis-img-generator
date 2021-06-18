import { FormControl, FormLabel, IconButton, Input, InputGroup, InputRightElement, Tabs, TabList, TabPanels, Tab, TabPanel, Box, InputLeftElement } from '@chakra-ui/react';
import React from 'react';
import { MdClose } from 'react-icons/md';

const InputControls = ({ title, setTitle, topic, setTopic, handleImageLoad, imageURL, setImageURL, fileURL, setFileURL }) => {

    const handleClearFile = () => {
        setFileURL('');
        document.getElementById('fileInput').value = '';
    };


    return (
        <>
            <Tabs>
                <TabList mb={3}>
                    <Tab>Ссылка</Tab>
                    <Tab>Файл</Tab>
                </TabList>
                <TabPanels >
                    <TabPanel padding={0}>
                        <FormControl>
                            <FormLabel>Ссылка на изображение</FormLabel>
                            <InputGroup>
                                <Input
                                    type='text'
                                    variant='filled'
                                    value={imageURL}
                                    placeholder='Вставьте ссылку...'
                                    onChange={e => setImageURL(e.target.value)} />
                                {imageURL !== '' && <InputRightElement
                                    children={<IconButton
                                        variant='ghost'
                                        colorScheme='red'
                                        icon={<MdClose />}
                                        onClick={() => setImageURL('')}></IconButton>} />}
                            </InputGroup>
                        </FormControl>
                    </TabPanel>
                    <TabPanel padding={0}>
                        <FormControl>
                            <FormLabel as={Box}>Выберите файл изображения</FormLabel>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    width='100% !important'
                                    justifyContent='flex-start'
                                    pl={4}
                                    isTruncated
                                    children={fileURL ? document.getElementById('fileInput').value.replace(/.*[\/\\]/, '') : 'Файл не выбран'} />
                                <Input
                                    overflow='hidden'
                                    pt='36px'
                                    boxSizing='border-box'
                                    type='file'
                                    variant='filled'
                                    id='fileInput'
                                    onChange={handleImageLoad}
                                    accept="image/jpeg" />
                                {fileURL !== '' && <InputRightElement
                                    children={<IconButton
                                        variant='ghost'
                                        colorScheme='red'
                                        icon={<MdClose />}
                                        onClick={() => handleClearFile()}></IconButton>} />}
                            </InputGroup>
                        </FormControl>
                    </TabPanel>
                </TabPanels>
            </Tabs>
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
