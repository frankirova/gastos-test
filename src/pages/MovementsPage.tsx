
import { VStack } from "@chakra-ui/react"
import { MovementsList } from "../components/MovementsList"

export const MovementsPage = () => {


    return (
        <VStack backgroundColor={'#353634'} minHeight={'100vh'} minWidth='100vw' justifyContent={'center'} alignItems={'center'}>
            <MovementsList />
        </VStack>
    )
}