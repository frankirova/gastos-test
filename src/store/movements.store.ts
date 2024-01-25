import { create } from "zustand";
import { Movement } from "./types/movements.type";

export const useMovements = create((set) => ({
    movements: [],
    getMovements: async () => {
        const url = "https://gastito-test.onrender.com/movements";
        const response = await fetch(url);

        const movements = await response.json();
        set((state: any) => ({
            ...state,
            movements,
        }));
    },
    addMovement: async (movement: Movement, id_account: number) => {
        try {
            const response = await fetch(
                "https://gastito-test.onrender.com/movements",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ ...movement, id_account }),
                }
            );
            const totals_response = await fetch(
                `https://gastito-test.onrender.com/totals`
            );
            const totals = await totals_response.json();
    
            if (response.ok) {
                const addedMovement = await response.json();
                set((state: any) => ({
                    ...state,
                    movements: [...state.movements, addedMovement],
                    totals: totals,
                }));
            } else {
                console.error("Error al agregar el movimiento");
            }
        } catch (error) {
            console.error("Error en la solicitud: ", error);
        }
    },    
    updateMovement: async (updated_movement: Movement, id_account: number) => {
        try {
            const response = await fetch(
                `https://gastito-test.onrender.com/movement/${id_account}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updated_movement),
                }
            );
            if (response.ok) {
                const updatedMovementFromServer = await response.json();
                set((state: any) => {
                    const updatedMovements = state.movements.map(
                        (movement: Movement) =>
                            movement._id === id_account
                                ? updatedMovementFromServer
                                : movement
                    );
                    return {
                        ...state,
                        movements: updatedMovements,
                    };
                });
            }
        } catch (error) {
            console.error(error);
        }
    },
    deleteMovement: async (id_movement: number) => {
        try {
            await fetch(
                `https://gastito-test.onrender.com/movement/${id_movement}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            set((state: any) => {
                const updatedMovements = state.movements.filter(
                    (movement: Movement) => movement._id !== id_movement
                );
                return {
                    ...state,
                    movements: updatedMovements,
                };
            });
        } catch (error) {
            console.error("Error al eliminar el movimiento: ", error);
        }
    },
}));
