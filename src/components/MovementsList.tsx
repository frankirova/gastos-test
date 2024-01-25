import { useEffect, useState } from "react"
import { Button, HStack, Image, Tag, Text, VStack } from "@chakra-ui/react"
import { ButtonAdd } from "./ButtonAdd"

import { Link } from "react-router-dom"
import { useMovements } from "../store/movements.store"
import { Movement } from "../store/types/movements.type"
import { TotalComponent } from "./TotalComponent"

export const MovementsList = () => {
    const [selectGroup, setSelectGroup] = useState('expense')
    const { getMovements, movements }: any = useMovements()
    // const filtered_movements = movements.filter((movement: any) => movement.group === selectGroup)
    const [filteredMovements, setFilteredMovements] = useState([])
    useEffect(() => {
        getMovements()
        setFilteredMovements(movements.filter((movement: any) => movement.group === selectGroup))
    }, [selectGroup])
    console.log(movements)
    console.log(filteredMovements)
    console.log(selectGroup)

    return (
        <VStack padding={6} spacing={4}>
            <TotalComponent />
            <HStack justifyContent={"center"}>
                <Button onClick={() => { setSelectGroup('income') }}>Ingresos</Button>
                <Button onClick={() => { setSelectGroup('expense') }}>Gastos</Button>
            </HStack>
            <VStack spacing={6}>
                {
                    filteredMovements.map((movement: Movement) => (
                        <HStack key={movement._id}
                            as={Link}
                            to={`/${movement._id}`}
                            backgroundColor={'terceary'}
                            padding={6}
                            minWidth='90vw'
                            maxHeight={'6rem'}
                            color={'white'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                        >
                            <Image minW={'2rem'} src="https://placehold.co/48x48" borderRadius={'100%'} />
                            <Text minWidth={'4rem'}>{movement.category}</Text>
                            <Tag minW={'2rem'}>{new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(movement.amount)}</Tag>
                        </HStack>
                    ))
                }
                <ButtonAdd />
            </VStack >
        </VStack>
    )
}