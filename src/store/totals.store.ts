import { create } from "zustand";
export const useTotals = create((set) => ({
    totals: [],
    getTotals: async () => {
        const response = await fetch(
            `https://gastito-test.onrender.com/totals`
        );
        const totals = await response.json();
        set((state: any) => ({
            ...state,
            totals,
        }));
    },
}));
