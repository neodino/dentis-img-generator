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
                scale: 1,
                allowTaint: true,
                useCORS: true
            }
        ).then(function (canvas) {
            setIsRendering(false);
            var image = canvas.toDataURL("image/jpg");
            var downloadLink = document.createElement("a");
            downloadLink.href = image;
            downloadLink.download = "dentis";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        });
    };

    return { handleRender, isRendering };
};

export default useCanvasRender;