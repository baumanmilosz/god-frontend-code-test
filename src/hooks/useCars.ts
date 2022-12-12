import {fetchCarsListData} from "../requests/cars"
import {useState} from "react";
import {ECarBodyTypes} from "../enums/ECarBodyTypes";

export interface ICarListItem {
    id: string
    modelName: string
    bodyType: ECarBodyTypes
    modelType: string
    imageUrl: string
}


export const useCars = () => {
    const [cars, setCars] = useState<ICarListItem[] | null>(null)
    const handleFetchCarsListData = async () => {
       try {
           const res = await fetchCarsListData();
           if(res.cars) {
               setCars(res.cars)
           }
           return true
       } catch (e) {
           console.error(e)
       }
    };


    return { handleFetchCarsListData, cars };
};
