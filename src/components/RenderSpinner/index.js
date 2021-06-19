import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    Center,
    Spinner
} from "@chakra-ui/react";

const RenderSpinner = ({ isRendering }) => {
    return (
        <Modal isOpen={isRendering} size='xs'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Подготовка изображения...</ModalHeader>
                <ModalBody>
                    <Center h='100px'>
                        <Spinner />
                    </Center>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
export default RenderSpinner;
