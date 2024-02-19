import { create } from "zustand";

export const useGlobal = create((set) => ({
    selectedGroup : 'expense',
    setSelectGroup: (group:string) => set({ selectedGroup: group }),
}))