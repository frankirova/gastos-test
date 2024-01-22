import { useEffect, useState } from "react";
// import { getSaldoDashboard } from "../helpers/getSaldoDashboard";
import { useAccount } from "../store/account.store";
import { updateTotalAccount } from "../helpers/updateTotalAccount";
import { Button, Tag, VStack } from "@chakra-ui/react";
// import { useTotals } from "../store/totals.store";
import { getSaldoDashboard } from "../helpers/getSaldoDashboard";

export const TotalComponent = () => {
    const { getAccount, accounts }: any = useAccount()
    // const { getTotals, totals }: any = useTotals()

    const saldo_total = Math.round(getSaldoDashboard(accounts))
    const saldo_total_format = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(saldo_total);
    const [saldo, setSaldo] = useState('')

    useEffect(() => {
        getAccount()
    }, [])
    // useEffect(() => {
    //     getTotals('6596f8c5b4bceed669bec305')
    // }, [])

    // setInterval(() => updateTotalAccount(accounts), 86400000);
    useEffect(() => {
        updateTotalAccount(accounts)
        console.log("update account")
    }, [])

    updateTotalAccount(accounts)

    const ver_saldo = () => {
        setSaldo(saldo_total_format)
    }
    const ocultar_saldo = () => {
        setSaldo('*****')
    }
    return (
        <VStack backgroundColor={'terceary'} padding={12}>
            <Tag colorScheme="blue" fontSize={'xx-large'}>
                Total: {saldo}
            </Tag>
            {saldo == '*****' ? <Button onClick={ver_saldo}>Ver saldo</Button> : <Button onClick={ocultar_saldo}>Ocultar saldo</Button>}
        </VStack>
    )
}