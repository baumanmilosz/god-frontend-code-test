import React from "react";
import {ERouteTypes} from "../../../enums/ERouteTypes";
import Image from 'next/image'
import {Text, useTheme} from 'vcc-ui'
import {CarListItemLink} from "../../atoms/CarListItemLink";
import {ICarListItem} from "../../../hooks/useCars"
import {styles} from './styles'

interface ICarListItemConfig {
    item: ICarListItem
}

export const CarListItem: ({item}: ICarListItemConfig) => JSX.Element = ({item}: ICarListItemConfig) => {
  const theme = useTheme();
    return (
      <div key={item.id} style={{margin: '0 10px'}}>
          <header style={{textAlign: 'left'}}>
              <Text as="h2" subStyle="emphasis" extend={{ color: theme.color.foreground.secondary, textTransform: 'uppercase'}}>{item.bodyType}</Text>
                 <Text as="h1" variant="hillary" subStyle="emphasis">
                     {item.modelName}
                     <Text as="h3" variant="columbus" subStyle="standard" extend={{color: theme.color.foreground.secondary, display: 'block', fromXL: {
                             display: 'inline !important'
                         }}}> {item.modelType}</Text>
                 </Text>
          </header>
          <div style={{ marginTop: '15px', marginBottom: '25px'}}>
              <Image
                  src={item.imageUrl}
                  alt="Car's side position"
                  width="400" height="300" layout="responsive" objectFit="contain"
              />
          </div>
          <footer style={styles}>
              <CarListItemLink route={`${ERouteTypes.LEARN}/${item.id}`} text="Learn"/>
              <CarListItemLink route={`${ERouteTypes.SHOP}/${item.id}`} text="Shop"/>
          </footer>
      </div>
  );
};
