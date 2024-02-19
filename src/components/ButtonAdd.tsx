
import { Button, Menu, MenuButton, MenuList, VStack } from "@chakra-ui/react";
// import "../styles/__ButtonWhatsapp.css";
import { ModalAddAccount } from "./ModalAddAccount";
import { PlusIcon } from "../icons/PlusIcon";
import { ModalAddMovement } from "./ModalAddMovement";

export const ButtonAdd = () => {
    return (
        <Menu>
            <MenuButton
                _active={{ bg: "#4d648d" }}
                _focus={{ outline: "none" }}
                _hover={{ bg: "#4d648d" }}
                as={Button}
                bg="#4d648d"
                borderRadius="full"
                bottom="4rem"
                color="white"
                h="50px"
                p={'15px'}
                pos="fixed"
                right="4rem"
                w="50px"
            >
                <PlusIcon />

            </MenuButton>
            <MenuList bg="white" color="black">
                <VStack>
                    <ModalAddAccount />
                    <ModalAddMovement />
                </VStack>
            </MenuList>
        </Menu>
    );
};
