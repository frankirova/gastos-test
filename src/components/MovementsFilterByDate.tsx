import { Button, HStack, Text } from "@chakra-ui/react"
import { ArrowLeft } from "../icons/ArrowLeft"
import { ArrowRight } from "../icons/ArrowRight"
import { useGlobal } from "../store/global.store"

export const MovementsFilterByDate = () => {
    const { week, setWeek }: any = useGlobal()

    const nextWeek = () => {
        week != 4 &&
            setWeek(week + 1)
    }
    const prevWeek = () => {
        week != 1 &&
            setWeek(week - 1)
    }

    return (
        <HStack color={'gray'} width={'90vw'} minHeight={'30px'} borderTop={'1px'} borderColor={'white'} justifyContent={'space-around'}>
            <Button variant={'none'} onClick={prevWeek}>
                <ArrowLeft />
            </Button>
            <Text>Semana {week}</Text>
            <Button variant={'none'} onClick={nextWeek}>
                <ArrowRight />
            </Button>
        </HStack>
    )
}