import { create } from "zustand";
import { Accounts } from "./types/account.type";

export const useAccount = create((set) => ({
    accounts: [],
    selectedAccount: {},
    getAccount: async () => {
        const url = "https://gastito-test.onrender.com/accounts";
        const response = await fetch(url);
        const accounts = await response.json();
        set((state: Accounts) => ({
            ...state,
            accounts,
        }));
    },
    addAccount: async (account: any) => {
        await fetch("https://gastito-test.onrender.com/addAccount", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(account),
        });
    },
    updateAccount: async (updatedAccount: any, id: number) => {
        await fetch(`https://gastito-test.onrender.com/account/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedAccount),
        });
    },
    deleteAccount: async () => {},
    getByIdAccount: async () => {},
}));
