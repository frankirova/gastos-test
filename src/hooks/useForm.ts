import { useState, ChangeEvent, FormEvent } from "react";

export interface FormValues {
    _id: number;
    name: string;
    balance: number;
    currency: string;
    // Add other form fields and their types as needed
}
// interface useFormProps {
//     initialValue?: FormValues;
// }

export const useForm = ({ initialValue = {} }: any) => {
    const [formState, setFormState] = useState<FormValues>(initialValue);

    const handleChange = ({
        target: { name, value },
    }: ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("enviando formulario");
    };

    const handleReset = () => {
        setFormState(initialValue);
    };

    const updateFormState = (newValue: FormValues) => {
        setFormState(newValue);
    };

    return {
        formState,
        handleChange,
        handleSubmit,
        handleReset,
        updateFormState,
    };
};
