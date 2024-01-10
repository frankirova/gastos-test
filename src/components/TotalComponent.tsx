import { useEffect, useState } from "react";
import { getSaldoDashboard } from "../helpers/getSaldoDashboard";
import { useAccount } from "../store/account.store";
import { updateTotalAccount } from "../helpers/updateTotalAccount";
import { Button, Tag } from "@chakra-ui/react";

export const TotalComponent = () => {
    const { getAccount, accounts }: any = useAccount()
    const saldo_total = Math.round(getSaldoDashboard(accounts))
    const saldo_total_format = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(saldo_total);
    const [saldo, setSaldo] = useState(saldo_total_format)

    useEffect(() => {
        getAccount()
    }, [])

    setInterval(() => updateTotalAccount(accounts), 86400000);
    const ver_saldo = () => {
        setSaldo(saldo_total_format)
    }
    const ocultar_saldo = () => {
        setSaldo('*****')
    }
    return (
        <>
            <Tag colorScheme="blue" fontSize={'xx-large'}>
                Total: {saldo}
            </Tag>
            {saldo == '*****' ? <Button onClick={ver_saldo}>Ver saldo</Button> : <Button onClick={ocultar_saldo}>Ocultar saldo</Button>}
        </>
    )
}