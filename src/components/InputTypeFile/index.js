import { FormControl, FormLabel, IconButton, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';
import { MdClose } from 'react-icons/md';
import React from 'react';

const InputTypeFile = ({ fileURL, setFileURL }) => {

    const handleClearFile = () => {
        setFileURL('');
        document.getElementById('fileInput').value = '';
    };

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
    };

    return (
        <FormControl>
            <FormLabel>Выберите файл изображения</FormLabel>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    width='100% !important'
                    justifyContent='flex-start'
                    pl={4}
                    isTruncated
                    children={fileURL ? document.getElementById('fileInput').value.replace(/.*[\\]/, '') : 'Файл не выбран'} />
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
    );
};

export default InputTypeFile;
