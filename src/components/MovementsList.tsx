import { useEffect, useState } from "react"
import { HStack, Image, Tag, Text, VStack } from "@chakra-ui/react"
import { ButtonAdd } from "./ButtonAdd"

import { Link } from "react-router-dom"
import { useMovements } from "../store/movements.store"
import { useGlobal } from "../store/global.store"
import { useAccount } from "../store/account.store"
import { MovementsFilterByDate } from "./MovementsFilterByDate"

export const MovementsList = () => {
    const { getMovements, movements }: any = useMovements()
    const [filteredMovements, setFilteredMovements] = useState([])
    const [porcentaje, setPorcentaje] = useState([])

    const { selectedGroup, week }: any = useGlobal()
    function obtenerSemana(fecha: any) {
        // Obtener el día del mes de la fecha
        const fechaEnserio = new Date(fecha)
        var dia = fechaEnserio.getDate();

        // Determinar la semana según el día del mes
        if (dia >= 1 && dia <= 8) {
            return 1;
        } else if (dia > 8 && dia <= 15) {
            return 2;
        } else if (dia > 15 && dia <= 22) {
            return 3;
        } else if (dia > 22 && dia <= 31) {
            return 4;
        } else {
            // Manejar casos donde la fecha no se ajusta a ninguno de los rangos
            return "Fecha inválida";
        }
    }
    const filtrarPorSemana = (movements:any, week:any) => {
        return movements.filter((movement:any) => obtenerSemana(movement.date) === week)
    }

    useEffect(() => {
        getMovements()
        const fileteredByGroup = movements.filter((movement: any) => movement.group === selectedGroup)
        const filteredByDate = filtrarPorSemana(filteredByGroup, week)
        setFilteredMovements(filteredByDate)
    }, [selectedGroup, week])

    const { eeea }: any = useAccount()
    useEffect(() => {
        async function fetchCategoriesPorcentaje() {
            const categoriasPorcentaje = await eeea(filteredMovements);
            setPorcentaje(categoriasPorcentaje)
        }
        fetchCategoriesPorcentaje();
    }, [eeea, movements]);

    return (
        <>
            <MovementsFilterByDate />
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
                                <Text color={"gray"}>%{movement.porcentaje.toFixed(2)}</Text>
                                <Tag bg={'secondary'} paddingX={4} color={"white"}
                                >{new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(movement.total)}</Tag>
                            </HStack>
                        ))
                    }
                    <ButtonAdd />
                </VStack >
            </VStack>
        </>
    )
}
