import { create } from "zustand";

export const useGlobal = create((set) => ({
    selectedGroup: "expense",
    setSelectGroup: (group: string) => set({ selectedGroup: group }),
    week: 1,
    setWeek: (week: number) => {
        set({ week: week });
    },
}));
