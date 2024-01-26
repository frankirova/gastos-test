// HamburguesaMenu.tsx
import React, { useEffect, useState } from 'react';
import { Button, useDisclosure, Box, VStack, Text, HStack, Menu, MenuButton, MenuList, Tag, MenuItem } from '@chakra-ui/react';
import { MenuBurgerIcon } from '../icons/MenuBurgerIcon';
import { XIcon } from '../icons/XIcon';
import { Link } from 'react-router-dom';
import { useAccount } from '../store/account.store';
import { Accounts } from '../store/types/account.type';
import { useTotals } from '../store/totals.store';

const Nav: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { accounts, getAccount }: any = useAccount()
    const { totals, getTotals }: any = useTotals()
    const [selectedAccount, setSelectedAccount] = useState({ name: 'USD' })

    useEffect(() => {
        getAccount()
    }, [])
    useEffect(() => {
        getTotals()
    }, [])
    return (
        <HStack backgroundColor={'#353634'} width='100vw'>
            <Button onClick={onOpen}
                leftIcon={<MenuBurgerIcon />}
                color={'white'}
                background={'primary'}
            />
            <VStack position={'fixed'} top="0"
                left='16%' width='70vw' justifyContent='center' height='10vh' borderBottomRadius="8px" background={'primary'} zIndex="overlay"
            >
                <Text color={'white'}>{totals}</Text>
                {/*<Heading color={'white'} as={Link} to={'/'}>Gastito</Heading>*/}
                <Menu>
                    <MenuButton>
                        <Tag variant={"solid"}>{selectedAccount?.name}</Tag>
                    </MenuButton>
                    <MenuList>
                        {accounts.map((account: Accounts) => (
                            <MenuItem
                                onClick={() =>
                                    setSelectedAccount(account)
                                }
                            >
                                {account.name}
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
                {/*<TotalComponent/>*/}
            </VStack>
            {/* Menú lateral */}
            <Box
                pos="fixed"
                top="0"
                left="0"
                height="100vh"
                width='50vw'
                padding="4"
                background="#4d648d"
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
        </HStack >
    );
};

export default Nav;
