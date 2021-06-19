import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from "@chakra-ui/react";
import PosXPosYSliders from '../../../../components/PosXPosYSliders';

const ImageSettings = ({ posX, posY, bgScale, setPosX, setPosY, setBgScale }) => {
    return (
        <Accordion allowToggle>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex="1" textAlign="left" fontWeight='semibold'>
                            Настройки изображения
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <PosXPosYSliders
                        posX={posX}
                        posY={posY}
                        setPosX={setPosX}
                        setPosY={setPosY}
                        setBgScale={setBgScale}
                        bgScale={bgScale} />
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default ImageSettings;
