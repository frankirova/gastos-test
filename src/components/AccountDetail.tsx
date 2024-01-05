import { filterById } from "../helpers/filterBy"
import { Flex, Text, VStack } from "@chakra-ui/react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

import { useAccount } from "../store/account.store"
import { AccountUpdateForm } from "./AccountUpdateForm"

export const AccountDetail = () => {
    const { getAccount, accounts }: any = useAccount()
    const { account_id }: any = useParams();
    const account_filtered = filterById(accounts, account_id)

    useEffect(() => {
        getAccount()
    }, [])

    return (
        <VStack backgroundColor={'#353634'} minHeight={'100vh'} justifyContent={'center'} alignItems={'center'}>
            <Text color={"white"}>
                {account_filtered[0].name}
            </Text>
            <AccountUpdateForm id={account_id} />
            <Flex>

            </Flex>

        </VStack>)
}