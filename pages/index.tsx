import React, {useEffect, useState} from "react";
import {CarList} from "../src/components/organisms/CarList";
import {ECarBodyTypes} from "../src/enums/ECarBodyTypes";
import {FilterBar} from "../src/components/organisms/FilterBar";
import {useCars} from "../src/hooks/useCars";
import {Spinner} from "vcc-ui";

export interface IFilterBarListItem {
    name: ECarBodyTypes,
    isActive: boolean
}

export const filterBarList = [
    {
        name: ECarBodyTypes.SUV,
        isActive: false,
    },
    {
        name: ECarBodyTypes.ESTATE,
        isActive: false,
    },
    {
        name: ECarBodyTypes.SEDAN,
        isActive: false
    }
]

function HomePage() {
    const [filters, setFilters] = useState<IFilterBarListItem[]>(filterBarList);
    const { handleFetchCarsListData, cars } = useCars()

    useEffect(() => {
        (async function () {
            await handleFetchCarsListData()
        })()
    }, [])
    return (
        <React.StrictMode>
           <div className="app-wrapper">
               {cars === null ? <div className="spinner-wrapper"><Spinner size={24}/></div> :
                   <>
                       <FilterBar filters={filters} changeFilters={setFilters}/>
                       <CarList cars={cars} filters={filters}/>
                   </>
               }
           </div>
        </React.StrictMode>
    );
}

export default HomePage;
