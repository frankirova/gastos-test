import { useAccount } from "../store/account.store";
import { useForm } from "../hooks/useForm";
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


export const AccountUpdateForm = ({ id }: any) => {
    const { updateAccount }: any = useAccount();
    const navigate = useNavigate()

    const { formState, handleChange } = useForm({
        name: '',
        balance: '',
        currency: '',
        cards: '',
        total: ''
    });

    const handleAction = (account: any) => {
        updateAccount(account, id);
    };

    const handleBack = () => {
        navigate('..')
    }

    return (
        <VStack>
            <FormControl color={"white"}>
                <FormLabel>Name</FormLabel>
                <Input
                    name="name"
                    onChange={handleChange}
                    placeholder="name"
                />
                <FormLabel>Balance</FormLabel>
                <Input
                    name="balance"
                    onChange={handleChange}
                    placeholder="balance"
                />
                <FormLabel>Tarjetas</FormLabel>
                <Input
                    name="cards"
                    onChange={handleChange}
                    placeholder="Selecciona una tarjeta"
                />
                <FormLabel>Tarjetas</FormLabel>
                <Input
                    name="currency"
                    onChange={handleChange}
                    placeholder="currency"
                />
            </FormControl >
            <VStack>
                <Button onClick={handleBack}>Back</Button>
                <Button
                    colorScheme="blue"
                    onClick={() => handleAction(formState)}
                >
                    Save
                </Button>
            </VStack>
        </VStack>
    )
}