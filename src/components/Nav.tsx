// HamburguesaMenu.tsx
import React from 'react';
import { Button, useDisclosure, Box, VStack, Text } from '@chakra-ui/react';
import { MenuBurgerIcon } from '../icons/MenuBurgerIcon';
import { XIcon } from '../icons/XIcon';
// import { HamburgerIcon } from '@chakra-ui/icons';

const Nav: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box backgroundColor={'#353634'} width='100vw'>
            <Button onClick={onOpen}
                leftIcon={<MenuBurgerIcon />}
                bg="#4d648d"
                color={'white'}
            />

            {/* Menú lateral */}
            <Box
                pos="fixed"
                top="0"
                left="0"
                h="100vh"
                w='50vw'
                p="4"
                bg="#4d648d"
                color="white"
                zIndex="overlay"
                display={isOpen ? 'block' : 'none'}
            >
                <VStack spacing="4" align="stretch">
                    <Text fontSize="xl">Dashboard</Text>
                    <Text fontSize="xl">Cuentas</Text>
                    <Text fontSize="xl">Categorias</Text>
                    <Text fontSize="xl">Movimientos</Text>

                </VStack>
                <Button onClick={onClose} mt="4">
                    <XIcon/>
                </Button>
            </Box>
        </Box>
    );
};

export default Nav;
