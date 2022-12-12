import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {ArrowButton} from "../../../components/atoms/ArrowButton";
import {useWindowSize} from "../../../hooks/useWindowSize";

interface ICarouselConfig {
    children: any
}

export const ResponsiveCarousel: ({children}: ICarouselConfig) => JSX.Element = ({children}:ICarouselConfig) => {
    const [width] = useWindowSize();
    return (
        <Carousel centerMode centerSlidePercentage={width < 1024 ? 80 : 35 } showStatus={false} renderArrowPrev={clickHandler => <ArrowButton clickHandler={clickHandler}/>} renderArrowNext={clickHandler => <ArrowButton clickHandler={clickHandler} isPrev={false}/>}>{children}</Carousel>
    );
};
