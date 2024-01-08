// HamburguesaMenu.tsx
import React from 'react';
import { Button, useDisclosure, Box, VStack, Text, Heading } from '@chakra-ui/react';
import { MenuBurgerIcon } from '../icons/MenuBurgerIcon';
import { XIcon } from '../icons/XIcon';
import { Link } from 'react-router-dom';
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
            <Heading color={'white'} as={Link} to={'/'}>Gastito</Heading>
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
                <VStack spacing="4" align="stretch" fontSize={'x-large'}>
                    <Text as={Link} to={'/dashboard'} onClick={onClose}>Dashboard</Text>
                    <Text as={Link} to={'/accounts'} onClick={onClose}>Cuentas</Text>
                    <Text as={Link} to={'/categories'} onClick={onClose}>Categorias</Text>
                    <Text as={Link} to={'/movements'} onClick={onClose}>Movimientos</Text>

                </VStack>
                <Button onClick={onClose} mt="4">
                    <XIcon />
                </Button>
            </Box>
        </Box>
    );
};

export default Nav;
