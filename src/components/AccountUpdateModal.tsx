import { useAccount } from "../store/account.store";
import { useForm } from "../hooks/useForm";
import React from "react";

import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";

export const ModalEditAccount = ({ id }: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { updateAccount }: any = useAccount();

    const { formState, handleChange } = useForm({
        name: '',
        balance: '',
        currency: '',
        cards: '',
        total: ''
    });
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const handleActionAndCloseModal = (account: any) => {
        updateAccount(account, id);
        onClose();
    };
    return (
        <Flex justifyContent="center">
            <Button
                onClick={onOpen}
                backgroundColor={"#4d648d"}
                color={"#acc2ef"}
            >
                Edit
            </Button>
            <Modal
                finalFocusRef={finalRef}
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input
                                name="name"
                                onChange={handleChange}
                                placeholder="name"
                                ref={initialRef}
                            />
                        </FormControl>
                        <FormLabel>Balance</FormLabel>
                        <Input
                            name="balance"
                            onChange={handleChange}
                            placeholder="Seleciona un grupo"
                        />
                        <FormLabel>Tarjetas</FormLabel>
                        <Input
                            name="cards"
                            onChange={handleChange}
                            placeholder="Selecciona una tarjeta"
                        />
                        <FormLabel>Tarjetas</FormLabel>
                        <Input
                            name="type"
                            onChange={handleChange}
                            placeholder="Selecciona un tipo"
                        />
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button
                            colorScheme="orange"
                            mr={3}
                            onClick={() => handleActionAndCloseModal(formState)}
                        >
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    );
};
