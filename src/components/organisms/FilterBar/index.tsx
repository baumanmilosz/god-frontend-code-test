import React from "react";
import {Button, Text} from "vcc-ui";
import {ECarBodyTypes} from "../../../../src/enums/ECarBodyTypes";
import {IFilterBarListItem} from "../../../../pages";
import {styles} from "./styles"

interface IFilterBarConfig {
    filters:  IFilterBarListItem[]
    changeFilters: (prevState: (prevState: IFilterBarListItem[]) => (IFilterBarListItem)[]) => void;
}

export const FilterBar: ({filters, changeFilters}: IFilterBarConfig) => JSX.Element = ({filters, changeFilters}:IFilterBarConfig) => {
    const _handleActiveToggle = (name: ECarBodyTypes) => {
        changeFilters((prevState: IFilterBarListItem[]) => prevState.map(item => {
            if(item.name === name) {
                return {...item, isActive: !item.isActive}
            }
            return item
        }))
    }
  return (
      <div style={styles}>
          <Text as="p" variant="hillary" subStyle="emphasis">Filters:</Text>
          {filters.map((item: IFilterBarListItem) => (<Button key={item.name} variant={item.isActive ? 'default' : "outline"} onClick={() => _handleActiveToggle(item.name)}>{item.name}</Button>))}
      </div>
  );
};
