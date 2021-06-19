import html2canvas from 'html2canvas';
import { useState } from 'react';

const useCanvasRender = () => {
    const [isRendering, setIsRendering] = useState(false);
    const delay = ms => new Promise(res => setTimeout(res, ms));

    const handleRender = async (w, h) => {
        setIsRendering(true);
        window.scrollTo(0, 0);
        const composition = document.getElementById('composition');
        await delay(1000);
        html2canvas(composition,
            {
                width: w,
                height: h,
                scale: 1
            }
        ).then((canvas) => {
            let date = new Date();
            var image = document.body.appendChild(canvas);
            var downloadLink = document.createElement("a");
            downloadLink.href = image.toDataURL("image/jpg");
            downloadLink.download = "dentis" + date.toLocaleDateString();
            downloadLink.click();
            document.body.removeChild(canvas);
            setIsRendering(false);
        });
    };

    return { handleRender, isRendering };
};

export default useCanvasRender;
