import {
    Button,
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
import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
//   import { useCategories } from "../store/categoryStore";
import { useMovements } from "../store/movements.store";
import { useCategories } from "../store/categories.store";
import { useAccount } from "../store/account.store";
import { Accounts } from "../store/types/account.type";
import { updateTotalAccount } from "../helpers/updateTotalAccount";

export const ModalAddMovement = () => {
    // const [cryptos, setCryptos] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { categories, getCategories }: any = useCategories();
    const { addMovement }: any = useMovements();
    const { getMovements }: any = useMovements();
    const { getAccount, accounts, updateAccount }: any = useAccount();

    const categoriesExpense = categories.filter(
        (category: any) => category.group === "expense"
    );
    const categoriesIncome = categories.filter(
        (category: any) => category.group === "income"
    );

    useEffect(() => {
        getAccount();
    }, []);

    useEffect(() => {
        getMovements();
    }, []);

    useEffect(() => {
        getCategories();
    }, []);

    // useEffect(() => {
    //     fetch(
    //         "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100"
    //     )
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setCryptos(data);
    //             console.log(data);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching data:", error);
    //         });
    // }, []);

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;

    const { formState, handleChange, handleChangeSelect }: any = useForm({
        amount: "",
        category: "",
        date: formattedDate,
        description: "",
        group: "",
    });

    const handleGroupChange = (e: any) => {
        const selectedGroup = e.target.value;
        setSelectedGroup(selectedGroup);
        handleChange(e);
    };

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const handleActionAndCloseModal = (category: any) => {
        addMovement(category);
        updateTotalAccount(updateAccount, accounts)
        onClose();
    };
    // if (!fieldsMovements[0]) return <p>Loading</p>;
    return (
        <>
            <Button onClick={onOpen}>Add Movement</Button>
            <Modal
                finalFocusRef={finalRef}
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add movement</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Grupo</FormLabel>
                            <Select
                                name="group"
                                onChange={handleGroupChange}
                                placeholder="Seleciona un grupo"
                            >
                                <option value="expense">Gasto</option>
                                <option value="income">Ingreso</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Currency</FormLabel>

                            <Select
                                onChange={handleChangeSelect}
                                placeholder="Selecciona una moneda"
                                name="account"
                            >
                                {/* {cryptos.map((account) => (
                                    <option key={account.id} value={account.id}>
                                        <p>{account.id}</p>
                                        <Image w={"24px"} src={account.image} />
                                    </option>
                                ))} */}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Monto</FormLabel>
                            <Input
                                name="amount"
                                onChange={handleChange}
                                placeholder="Monto"
                                ref={initialRef}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Cuenta</FormLabel>
                            <Select
                                onChange={handleChangeSelect}
                                placeholder="Selecciona una categoria"
                                name="account"
                            >
                                {accounts.map((account: Accounts) => (
                                    <option key={account._id} value={account._id}>
                                        {account.name}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Categoria</FormLabel>
                            <Select
                                onChange={handleChangeSelect}
                                placeholder="Selecciona una categoria"
                                name="category"
                            >
                                {selectedGroup === "expense"
                                    ? categoriesExpense.map((category: any) => (
                                        <option key={category._id} value={category.category}>
                                            {category.category}
                                        </option>
                                    ))
                                    : categoriesIncome.map((category: any) => (
                                        <option key={category._id} value={category.category}>
                                            {category.category}
                                        </option>
                                    ))}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Descripcion</FormLabel>
                            <Input
                                name="description"
                                onChange={handleChange}
                                placeholder="Descripcion"
                                ref={initialRef}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            bg="#4d648d"
                            mr={3}
                            onClick={() => handleActionAndCloseModal(formState)}
                        >
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};