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
        console.log(id);
        console.log(updatedAccount);
    },
    deleteAccount: async () => {},
    getByIdAccount: async () => {},
    getTotalAccount: async (movements: any) => {
        const total = movements.reduce(
            (acc: any, movement: any) => acc + parseFloat(movement.amount),
            0
        );

        let categoriasporcentaje: any = {};

        for (const cat in movements) {
            console.log(movements[cat]);
            if (movements.category) {
            }
            const category = {
                cat: movements[cat].category,
                id: movements[cat]._id,
                total: movements[cat].amount,
            };
            categoriasporcentaje = ((category.total / total) * 100).toFixed(2);
            // console.log({
            //     porcentaje: categoriasporcentaje,
            //     nombre: movements[cat].category,
            // });
        }
        return categoriasporcentaje;
    },
    ea: [],
    eeea: async (movements: any) => {
        const total = movements.reduce(
            (acc: any, movement: any) => acc + parseFloat(movement.amount),
            0
        );
        const totalesPorCategoria: any = {};
        const objFinal: any = [];
        // Calcular los totales por categoría
        movements.forEach((movimiento: any) => {
            const categoria = movimiento.category;
            const monto = parseFloat(movimiento.amount);
            if (categoria in totalesPorCategoria) {
                totalesPorCategoria[categoria] += monto;
            } else {
                totalesPorCategoria[categoria] = monto;
            }
        });

        console.log("Categoría\tTotal\tPorcentaje");
        for (const categoria in totalesPorCategoria) {
            const totalCategoria = totalesPorCategoria[categoria];
            const porcentaje = (totalCategoria / total) * 100;
            // console.log(
            //     `${categoria}\t${totalCategoria.toFixed(
            //         2
            //     )}\t${porcentaje.toFixed(2)}%`
            // );
            // console.log({
            //     category: categoria,
            //     total: totalCategoria,
            //     porcentaje: porcentaje,
            // });
            const catlist = {
                category: categoria,
                total: totalCategoria,
                porcentaje: porcentaje,
            };
            objFinal.push(catlist);
        }
        return objFinal;
    },
}));
