
import { VStack } from "@chakra-ui/react"
import { MovementsList } from "../components/MovementsList"

export const MovementsPage = () => {


    return (
        <VStack py={9} backgroundColor={'terceary'} minHeight={'100vh'} minWidth='100vw' alignItems={'center'}>
            <MovementsList />
        </VStack>
    )
}