import {useLayoutEffect, useState} from "react";

export const useWindowSize = () => {
    const [size, setSize] = useState<number[]>([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        // Optionally, we can use debounce function for optimization, but there is not in requirements :) .
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
};
