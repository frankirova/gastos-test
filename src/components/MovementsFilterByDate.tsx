import { HStack, Text } from "@chakra-ui/react"
import { ArrowLeft } from "../icons/ArrowLeft"
import { ArrowRight } from "../icons/ArrowRight"

export const MovementsFilterByDate = () => {
    return (
        <HStack color={'gray'} width={'90vw'} minHeight={'30px'} borderTop={'1px'} borderColor={'white'} justifyContent={'space-around'}>
            <ArrowLeft />
            <Text>Semana 1</Text>
            <ArrowRight />
        </HStack>
    )
}