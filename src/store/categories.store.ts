import { create } from "zustand";
import { Category } from "./types/categories.type";

export const useCategories = create((set) => ({
    categories: [],
    getCategories: async () => {
        const response = await fetch(
            "https://gastito-test.onrender.com/categories"
        );
        const categories = await response.json();
        set((state:any) => ({
            ...state,
            categories,
        }));
    },
    addCategory: async (category:Category) => {
        await fetch("https://gastito-test.onrender.com/category", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(category),
        });
    },
    deleteCategory: async (id:number) => {
        await fetch(`https://gastito-test.onrender.com/category/${id}`, {
            method: "DELETE",
            body: JSON.stringify(id),
        });
    },
}));
