import { useEffect } from "react"
import { useAccount } from "../store/account.store"
import { Accounts } from "../store/types/account.type"
import { HStack, Image, Tag, Text, VStack } from "@chakra-ui/react"
import { ButtonAdd } from "./ButtonAdd"
import { updateTotalAccount } from "../helpers/updateTotalAccount"
import { Link } from "react-router-dom"

export const AccountList = () => {
    const { getAccount, accounts, updateAccount }: any = useAccount()

    useEffect(() => {
        getAccount()
    }, [])
    useEffect(()=> {
        updateTotalAccount(updateAccount, accounts)
    }, [])

    setInterval(() => updateTotalAccount(updateAccount, accounts), 86400000);

    return (
        <VStack spacing={4} padding={6}>
            <VStack spacing={2} overflowY={'auto'}>
                {
                    accounts.map((account: Accounts) => (
                        <HStack key={account._id}
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

                        </HStack>
                    ))
                }
                <ButtonAdd />
            </VStack>
        </VStack>
    )
}