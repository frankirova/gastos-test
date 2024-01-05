import { useEffect } from "react"
import { useAccount } from "../store/account.store"
import { Accounts } from "../store/types/account.type"
import { Flex, Image, Tag, Text, VStack } from "@chakra-ui/react"
import { ButtonAdd } from "./ButtonAdd"
import { updateTotalAccount } from "../helpers/updateTotalAccount"
import { getSaldoDashboard } from "../helpers/getSaldoDashboard"
import { Link } from "react-router-dom"

export const AccountList = () => {
    const { getAccount, accounts }: any = useAccount()
    const saldo_total = Math.round(getSaldoDashboard(accounts))
    const saldo_total_format = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(saldo_total);

    useEffect(() => {
        getAccount()
    }, [])

    setInterval(() => updateTotalAccount(accounts), 86400000);

    return (
        <VStack spacing={6}>
            <Tag colorScheme="blue" fontSize={'xx-large'}>
                Total: {saldo_total_format}
            </Tag>
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
                        <Image minW={'3rem'} src="https://placehold.co/48x48" borderRadius={'100%'} />
                        <Tag minW={'3rem'} key={account._id}>{account.name}</Tag>
                        <Text minW={'3rem'}>{new Intl.NumberFormat('es-AR', { style: 'currency', currency: account.currency }).format(account.balance)}</Text>

                    </Flex>
                ))
            }
            <ButtonAdd />
        </VStack>
    )
}