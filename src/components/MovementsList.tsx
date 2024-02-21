import { useEffect, useState } from "react"
import { HStack, Image, Tag, Text, VStack } from "@chakra-ui/react"
import { ButtonAdd } from "./ButtonAdd"

import { Link } from "react-router-dom"
import { useMovements } from "../store/movements.store"
import { useGlobal } from "../store/global.store"
import { useAccount } from "../store/account.store"

export const MovementsList = () => {
    const { getMovements, movements }: any = useMovements()
    // const [filteredMovements, setFilteredMovements] = useState([])
    const [porcentaje, setPorcentaje] = useState([])

    const { selectedGroup }: any = useGlobal()

    useEffect(() => {
        getMovements()
        // setFilteredMovements(movements.filter((movement: any) => movement.group === selectedGroup))
    }, [selectedGroup])



    const { eeea }: any = useAccount()
    useEffect(() => {
        async function fetchCategoriesPorcentaje() {
            const categoriasPorcentaje = await eeea(movements);
            console.log(categoriasPorcentaje);
            setPorcentaje(categoriasPorcentaje)
            // Here you can update state with categoriasPorcentaje if necessary
        }
        fetchCategoriesPorcentaje();
    }, [eeea, movements]);

    return (
        <>
            <VStack padding={6} spacing={4}>
                <VStack spacing={2} overflowY={'auto'} >
                    {
                        porcentaje.map((movement: any) => (
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
                                <HStack spacing={4}>
                                    <Image minW={'2rem'} src="https://placehold.co/24x24" borderRadius={'100%'} />
                                    <Text minWidth={'4rem'}>{movement.category}</Text>
                                </HStack>
                                <Text color={"gray"}>%{ movement.porcentaje.toFixed(2)}</Text>
                                <Tag bg={'secondary'} size={'lg'} color={"white"} minW={'2rem'}>{new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(movement.total)}</Tag>
                            </HStack>
                        ))
                    }
                    {/* {porcentaje.map((cat: Category) => (
                        <VStack color={"white"}>
                            <Text>Nombre: {cat.category}</Text>
                            <Text>Total: {cat.total}</Text>
                            <Text>%: {cat.porcentaje}</Text>
                        </VStack>
                    ))} */}

                    <ButtonAdd />
                </VStack >
            </VStack>
        </>
    )
}
