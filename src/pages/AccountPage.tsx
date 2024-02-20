import { VStack } from "@chakra-ui/react"
import { AccountList } from "../components/AccountList"

export const AccountPage = () => {
    return (
        <VStack backgroundColor={'#353634'} minHeight={'100vh'} minWidth='100vw'>
            <AccountList />
        </VStack>
    )
}