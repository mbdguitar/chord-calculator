import React, { useState, useEffect } from "react";

function useWindowWidth() {
    const [ width, setWidth ] = useState(
        {
            width: window.innerWidth,
        });

    useEffect(() => {
        function handleResize() {
            setWidth({
                width: window.innerWidth
            });
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])
    
    return width;
}

export default useWindowWidth;