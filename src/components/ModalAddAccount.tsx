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
import { FormValues, useForm } from "../hooks/useForm";
import { useAccount } from "../store/account.store";
// import { Accounts } from "../store/types/account.type";
import React from "react";
// import { getCryptos } from "../helpers/getCryptos";
import { convertToARS } from '../helpers/convertToArs'

export const ModalAddAccount = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const [cryptos, setCryptos] = useState([]);
    const { addAccount }: any = useAccount()

    const { formState, handleChange } = useForm({ name: '', balance: '', cards: '', currency: '' });

    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    /*const handleActionAndCloseModal = (account: FormValues) => {
        addAccount(account)
        onClose();
    };*/

    const handleActionAndCloseModal = async (account: FormValues) => {
        const total = await convertToARS(account.currency, account.balance);
        if (total !== null) {
            const accountWithTotal = { ...account, total };
            await addAccount(accountWithTotal);
            console.log(accountWithTotal)
        }
        onClose();
    };
    return (
        <Flex justifyContent="center">
            <Button
                onClick={onOpen}
                backgroundColor={"#4d648d"}
                color={"#acc2ef"}
            >
                Add Account
            </Button>
            <Modal
                finalFocusRef={finalRef}
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input
                                name="name"
                                onChange={handleChange}
                                // onClose={onClose}
                                placeholder="nombre de la cuenta"
                                ref={initialRef}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Saldo</FormLabel>
                            <Input
                                name="balance"
                                onChange={handleChange}
                                // onClose={onClose}
                                placeholder="nombre de la cuenta"
                                ref={initialRef}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Tarjetas</FormLabel>
                            <Input
                                name="cards"
                                onChange={handleChange}
                                // onClose={onClose}
                                placeholder="nombre de la cuenta"
                                ref={initialRef}
                            />
                        </FormControl>
                        <FormLabel>Moneda</FormLabel>
                        <Input
                            name="currency"
                            onChange={handleChange}
                            // onClose={onClose}
                            placeholder="nombre de la cuenta"
                            ref={initialRef}
                        />
                        {/* <Select
                            name="currency"
                            onChange={handleChange}
                            placeholder="Seleciona una moneda"
                        >
                            {cryptos.map((account) => (
                                <option key={account.id} value={account.id}>
                                    <p>{account.id}</p>
                                    <Image w={"24px"} src={account.image} />
                                </option>
                            ))}
                        </Select> */}
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
