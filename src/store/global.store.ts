import { create } from "zustand";

export const useGlobal = create((set) => ({
    selectedGroup : 'expense',
    setSelecteGroup: (group:any) => set({ selectedGroup: group }),
}))