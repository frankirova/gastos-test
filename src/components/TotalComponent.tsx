import { Button, Tag, Text, VStack } from "@chakra-ui/react";
import { useTotals } from "../store/totals.store";
import { useEffect, useState } from "react";

export const TotalComponent = () => {
    const { totals, getTotals }: any = useTotals()
    const [saldo, setSaldo]: any = useState()

    const updateTotal = () => {
        setSaldo(totals)
    }

    useEffect(() => {
        getTotals()
    }, [])

    useEffect(() => {
        updateTotal()
    }, [])

    const ver_saldo = () => {
        setSaldo(totals)
    }
    const ocultar_saldo = () => {
        setSaldo('**********')
    }
    return (
        <VStack width='90vw' backgroundColor={'terceary'} padding={12}>
            <Tag colorScheme="blue" fontSize={'xx-large'} p={4}>
                <Text>Total:</Text>
                <Text>{saldo}</Text>
            </Tag>
            {saldo == '**********' ? <Button onClick={ver_saldo}>Ver saldo</Button> : <Button onClick={ocultar_saldo}>Ocultar saldo</Button>}
        </VStack>
    )
}