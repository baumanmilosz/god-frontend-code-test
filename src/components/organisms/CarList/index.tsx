import React from "react";
import {CarListItem} from "../../molecules/CarListItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {ResponsiveCarousel} from "../ResponsiveCarousel";
import {ICarListItem} from "../../../hooks/useCars";
import {IFilterBarListItem} from "../../../../pages";

interface ICarListConfig {
    filters: IFilterBarListItem[]
    cars: ICarListItem[] | null
}


export const CarList: ({filters, cars}: ICarListConfig) => JSX.Element = ({filters, cars}:ICarListConfig) => {
    const activeFilters = filters.filter(filter => filter.isActive).map(item => item.name)
    const filteredCars = cars?.filter(item => activeFilters.length ? activeFilters.includes(item.bodyType) : item);

    return (
        <ResponsiveCarousel>{filteredCars?.map(car => <CarListItem key={car.id} item={car}/>)}</ResponsiveCarousel>
  );
};
