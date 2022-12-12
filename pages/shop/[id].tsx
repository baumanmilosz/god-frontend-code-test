import React from "react";
import {useRouter} from "next/router";
import {Text} from 'vcc-ui'

function ShopPage() {
    const router = useRouter()
    const { id } = router.query
    return (
        <React.StrictMode>
           <Text as="h1">
               Shop - {id}
           </Text>
        </React.StrictMode>
    );
}

export default ShopPage;
