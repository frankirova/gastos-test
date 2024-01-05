
import { Button, Menu, MenuButton, MenuList } from "@chakra-ui/react";
// import "../styles/__ButtonWhatsapp.css";
import { ModalAddAccount } from "./ModalAddAccount";

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
                h="60px"
                pos="fixed"
                right="4rem"
                w="60px"
            >
                <p color="white">
                    <i className="fa-solid fa-plus"></i>
                </p>
            </MenuButton>
            <MenuList bg="white" color="black">
                <ModalAddAccount />
            </MenuList>
        </Menu>
    );
};
