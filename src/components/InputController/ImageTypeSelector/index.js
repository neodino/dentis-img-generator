import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ImageTypeSelector = () => {

    return (
        <Menu placement='bottom-end'>
            {({ isOpen }) => (
                <>
                    <MenuButton textAlign='left' isActive={isOpen} as={Button} rightIcon={isOpen ? <FaChevronUp /> : <FaChevronDown />}>
                        Шаблон изображения
                    </MenuButton>
                    <MenuList>
                        <MenuItem as={Link} to='/article'>Статья</MenuItem>
                        <MenuItem as={Link} to='/before-after'>До / После</MenuItem>
                        <MenuItem as={Link} to='/promotion'>Акции и скидки</MenuItem>
                    </MenuList>
                </>
            )}
        </Menu>
    );
};

export default ImageTypeSelector;
