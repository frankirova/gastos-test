import { useEffect, useState } from "react"
import { Button, HStack, Image, Tag, Text, VStack } from "@chakra-ui/react"
import { ButtonAdd } from "./ButtonAdd"

import { Link } from "react-router-dom"
import { useMovements } from "../store/movements.store"
import { Movement } from "../store/types/movements.type"

export const MovementsList = () => {
    const [selectGroup, setSelectGroup] = useState('')
    const { getMovements, movements }: any = useMovements()
    const filtered_movements = movements.filter((movement: any) => movement.group === selectGroup)

    useEffect(() => {
        getMovements()
    }, [])

    return (
        <VStack padding={6} spacing={4}>
            <HStack justifyContent={"center"}>
                <Button onClick={() => { setSelectGroup('income') }}>Ingresos</Button>
                <Button onClick={() => { setSelectGroup('expense') }}>Gastos</Button>
            </HStack>
            <VStack spacing={6}>
                {
                    filtered_movements.map((movement: Movement) => (
                        <HStack key={movement._id}
                            as={Link}
                            to={`/${movement._id}`}
                            backgroundColor={'#2b2b2b'}
                            padding={6}
                            minWidth='90vw'
                            maxHeight={'6rem'}
                            color={'white'}
                            justifyContent={'space-evenly'}
                            alignItems={'center'}
                        >
                            <Image src="https://placehold.co/48x48" borderRadius={'100%'} />
                            <Text maxWidth={'7rem'}>{movement.category}</Text>
                            <Tag minW={'2rem'}>{new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(movement.amount)}</Tag>
                        </HStack>
                    ))
                }
                <ButtonAdd />
            </VStack >
        </VStack>
    )
}