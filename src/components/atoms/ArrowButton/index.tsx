import React from "react";
import chevronCircled from '/docs/chevron-circled.svg'
import Image from 'next/image'
import {Button} from "vcc-ui";

interface IArrowButtonConfig {
    clickHandler: () => void
    isPrev?: boolean
}

export const ArrowButton: ({isPrev, clickHandler}: IArrowButtonConfig) => JSX.Element = ({isPrev = true, clickHandler}:IArrowButtonConfig) => {
    return (
        <Button className="arrow-button" variant="text" style={{...isPrev ? {right: '50px'}: {}}} onClick={() => clickHandler()}><Image onClick={() => clickHandler()} src={chevronCircled} style={{...isPrev ? {transform: 'rotate(180deg)'}: {}}}/></Button>
    );
};
