import { useEffect, useState } from "react"
import { useAccount } from "../store/account.store"
import { Accounts } from "../store/types/account.type"
import { Button, Flex, Image, Tag, Text, VStack } from "@chakra-ui/react"
import { ButtonAdd } from "./ButtonAdd"
import { updateTotalAccount } from "../helpers/updateTotalAccount"
import { getSaldoDashboard } from "../helpers/getSaldoDashboard"
import { Link } from "react-router-dom"
import { useTotals } from "../store/totals.store"

export const AccountList = () => {
    const { getAccount, accounts }: any = useAccount()
    const { totals, getTotals }: any = useTotals()
    const saldo_total = Math.round(getSaldoDashboard(accounts))
    const saldo_total_format = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(saldo_total);
    const [saldo, setSaldo] = useState(saldo_total_format)

    useEffect(() => {
        getAccount()
    }, [])

    useEffect(() => {
        getTotals()
    }, [])

    setInterval(() => updateTotalAccount(accounts), 86400000);
    const ver_saldo = () => {
        setSaldo(saldo_total_format)
    }
    const ocultar_saldo = () => {
        setSaldo('*****')
    }
    return (
        <VStack spacing={6}>
            <Tag colorScheme="blue" fontSize={'xx-large'}>
                Total: {totals}
            </Tag>
            {saldo == '*****' ? <Button onClick={ver_saldo}>Ver saldo</Button> : <Button onClick={ocultar_saldo}>Ocultar saldo</Button>}
            {
                accounts.map((account: Accounts) => (
                    <Flex key={account._id}
                        as={Link}
                        to={`/${account._id}`}
                        backgroundColor={'#2b2b2b'}
                        minWidth='80vw'
                        minHeight={'4rem'}
                        color={'white'}
                        justifyContent={'space-evenly'}
                        alignItems={'center'}
                    >
                        <Image minW={'.3rem'} src="https://placehold.co/48x48" borderRadius={'100%'} />
                        <Tag key={account._id}>{account.name}</Tag>
                        <Text minW={'8rem'}>{new Intl.NumberFormat('es-AR', { style: 'currency', currency: account.currency }).format(account.balance)}</Text>

                    </Flex>
                ))
            }
            <ButtonAdd />
        </VStack>
    )
}