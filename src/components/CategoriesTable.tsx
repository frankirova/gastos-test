import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    useColorModeValue,
} from "@chakra-ui/react";
import { ModalUpdateCategory } from "./ModalUpdateCategory";
import { Category } from "../store/types/categories.type";
import { DeleteModal } from "./ModalDeleteCategory";

export const CategorieTable = ({ categories }: any) => {
    const bgColorGreen = useColorModeValue("green.100", "green.700");
    const bgColorRed = useColorModeValue("red.100", "red.700");
    const fieldsCategory = categories.map((cat: any) => Object.keys(cat));

    if (!categories[0]) return <h1>Loading...</h1>;

    const getBgColor = (group: string) => {
        return group === "income" ? bgColorGreen : bgColorRed;
    };

    return (
        <Table variant="simple"size={'sm'} maxWidth={'400px'} bg={'primary'}>
            <Thead>
                <Tr bg="#3a5270">
                    {fieldsCategory[0].slice(1,4).map((field: string) => (
                        <Th color="white">{field}</Th>
                    ))}
                    <Th color="white">Edit</Th>
                    <Th color="white">Delete</Th>
                </Tr>
            </Thead>
            <Tbody>
                {categories.map((category: Category) => (
                    <Tr bg={getBgColor(category.group)}>
                        <Td>{category.category}</Td>
                        <Td>{category.group}</Td>
                        <Td>
                            <ModalUpdateCategory />
                        </Td>
                        <Td>
                            <DeleteModal />
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};