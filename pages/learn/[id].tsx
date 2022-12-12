import React from "react";
import { useRouter } from 'next/router';
import {Text} from 'vcc-ui'

function LearnPage() {
    const router = useRouter()
    const { id } = router.query
    return (
        <React.StrictMode>
           <Text as="h1">
               Learn - {id}
           </Text>
        </React.StrictMode>
    );
}

export default LearnPage;
