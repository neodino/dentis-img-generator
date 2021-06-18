import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import React, { useState } from 'react';

const ImageTypeSelector = () => {

    return (
        <Menu placement='bottom-end'>
            {({ isOpen }) => (
                <>
                    <MenuButton textAlign='left' isActive={isOpen} as={Button} rightIcon={isOpen ? <FaChevronUp /> : <FaChevronDown />}>
                        Шаблон изображения
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </>
            )}
        </Menu>
    );
};

export default ImageTypeSelector;
