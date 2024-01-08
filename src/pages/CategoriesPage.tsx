// import { ModalAddCategory } from "../components/ModalAddCategory";
// import { SimpleTable } from "../components/Table";
import { useCategories } from "../store/categories.store";
import { useEffect } from "react";

import { Flex, Heading, Spinner } from "@chakra-ui/react";
import { CategorieTable } from "../components/CategoriesTable";
import { ModalAddCategory } from "../components/ModalAddCategorie";

export const CategoriesPage = () => {
    // const { deleteCategory }: any = useCategories();
    const { getCategories, categories }: any = useCategories();

    useEffect(() => {
        getCategories();
    }, []);

    if (!Array.isArray(categories)) {
        return (
            <Flex justify="center" align="center" minHeight="85vh">
                <Spinner color="primary" size="xl" />
            </Flex>
        );
    }

    return (
        <Flex direction="column" gap={8} padding={4} alignItems={'center'} minH={'100vh'} width="100vw" bg={'primary'}>
            <Heading color={'white'}>CategoriesPage</Heading>
            <CategorieTable categories={categories} />
            <ModalAddCategory />
        </Flex>
    );
};