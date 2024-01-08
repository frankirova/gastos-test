import { useCategories } from "../store/categories.store";
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
    Select,
    useDisclosure,
} from "@chakra-ui/react";

export const ModalUpdateCategory = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { addCategory }: any = useCategories();

    const { formState, handleChangeSelect, handleChange } = useForm({});

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const handleActionAndCloseModal = (category: any) => {
        addCategory(category);
        onClose();
    };
    return (
        <Flex justifyContent="center">
            <Button onClick={onOpen}>
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
                    <ModalHeader>Edit category</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Category</FormLabel>
                            <Input
                                name="category"
                                onChange={handleChange}
                                placeholder="category"
                                ref={initialRef}
                            />
                        </FormControl>
                        <FormLabel>Grupo</FormLabel>
                        <Select
                            name="group"
                            onChange={handleChangeSelect}
                            placeholder="Seleciona un grupo"
                        >
                            <option value="expense">Gasto</option>
                            <option value="income">Ingreso</option>
                        </Select>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button
                            variant={'solid'}
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