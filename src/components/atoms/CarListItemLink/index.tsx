import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import {Text, useTheme} from 'vcc-ui'
import chevronSmall from '/docs/chevron-small.svg'

interface ICarListItemLinkConfig {
    route: string
    text: string
}

export const CarListItemLink: ({route, text}: ICarListItemLinkConfig) => JSX.Element = ({route, text}: ICarListItemLinkConfig) => {
    const theme = useTheme();
    return (
        <Link href={route}><Text as="span" subStyle="inline-link" variant="amundsen" extend={{textTransform: 'uppercase',  color: `${theme.color.foreground.action} !important`, cursor: 'pointer'}}>{text}<Image src={chevronSmall} height={13} width={20}/></Text></Link>
  );
};
