import { useEffect, useState } from "react"
import { HStack, Image, Tag, Text, VStack } from "@chakra-ui/react"
import { ButtonAdd } from "./ButtonAdd"

import { Link } from "react-router-dom"
import { useMovements } from "../store/movements.store"
import { Movement } from "../store/types/movements.type"
import { useGlobal } from "../store/global.store"

export const MovementsList = () => {
    // const [selectGroup, setSelectGroup] = useState('expense')

    const { getMovements, movements }: any = useMovements()
    // const filtered_movements = movements.filter((movement: any) => movement.group === selectGroup)
    const [filteredMovements, setFilteredMovements] = useState([])
    const { selectedGroup }:any = useGlobal()

    useEffect(() => {
        getMovements()
        setFilteredMovements(movements.filter((movement: any) => movement.group === selectedGroup))
    }, [selectedGroup])

    return (
        <VStack padding={6} spacing={4}>
            {/*<TotalComponent />*/}
            {/* <HStack justifyContent={"center"}>
                <Button onClick={() => { setSelectGroup('income') }}>Ingresos</Button>
                <Button onClick={() => { setSelectGroup('expense') }}>Gastos</Button>
            </HStack> */}
            <VStack spacing={2}>
                {
                    filteredMovements.map((movement: Movement) => (
                        <HStack key={movement._id}
                            as={Link}
                            to={`/${movement._id}`}
                            backgroundColor={'primary'}
                            borderRadius={'.5em'}
                            padding={6}
                            width='90vw'
                            maxHeight={'4rem'}
                            color={'white'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                        >
                            <HStack spacing={8}>
                                <Image minW={'2rem'} src="https://placehold.co/48x48" borderRadius={'100%'} />
                                <Text minWidth={'4rem'}>{movement.category}</Text>
                            </HStack>
                            <Tag bg={'secondary'} size={'lg'} color={"white"} minW={'2rem'}>{new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(movement.amount)}</Tag>
                        </HStack>
                    ))
                }
                <ButtonAdd />
            </VStack >
        </VStack>
    )
}
