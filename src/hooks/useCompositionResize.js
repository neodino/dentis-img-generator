import { useEffect, useState } from "react";

const useCompositionResize = (widthRef) => {

    const [squareWidth, setSquareWidth] = useState(0);
    const [containerScale, setContainerScale] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setSquareWidth(widthRef.current ? widthRef.current.offsetWidth : 0);
            setContainerScale(squareWidth / 1920);
        };

        if (widthRef.current) {
            handleResize();
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [squareWidth, widthRef]);

    return { scale: containerScale, height: squareWidth };
};

export default useCompositionResize;
