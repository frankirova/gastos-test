import { useEffect } from "react"
import { Flex, HStack, Image, Tag, Text, VStack } from "@chakra-ui/react"
import { ButtonAdd } from "./ButtonAdd"

import { Link } from "react-router-dom"
import { TotalComponent } from "./TotalComponent"
import { useMovements } from "../store/movements.store"
import { Movement } from "../store/types/movements.type"
export const MovementsList = () => {
    const { getMovements, movements }: any = useMovements()
    useEffect(() => {
        getMovements()
    }, [])
    return (
        <VStack spacing={6}>
            <TotalComponent />
            {
                movements.map((movement: Movement) => (
                    <VStack key={movement._id}
                        as={Link}
                        to={`/${movement._id}`}
                        backgroundColor={'#2b2b2b'}
                        padding={6}
                        minWidth='80vw'
                        minHeight={'4rem'}
                        color={'white'}
                        justifyContent={'space-evenly'}
                        alignItems={'center'}
                    >
                        <Image minW={'3rem'} src="https://placehold.co/48x48" borderRadius={'100%'} />
                        <Tag minW={'3rem'} key={movement._id}>{movement._id}</Tag>
                        {/* <Text minW={'3rem'}>{new Intl.NumberFormat('es-AR', { style: 'currency', currency: movement.currency }).format(movement.balance)}</Text> */}
                        <Text minW={'3rem'}>Cuenta: {movement.account}</Text>
                        <Text minW={'3rem'}>Categoria: {movement.category}</Text>
                        <Text minW={'3rem'}>Grupo: {movement.group}</Text>
                        <Text minW={'3rem'}>Descripcion: {movement.description}</Text>
                        <Tag minW={'3rem'}>{new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(movement.amount)}</Tag>
                    </VStack>
                ))
            }
            <ButtonAdd />
        </VStack >
    )
}