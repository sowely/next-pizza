import {create} from "zustand";
import State from "sucrase/dist/types/parser/tokenizer/state";

interface State {
    activeId: number; // активный id
    setActiveId: (activeId: number) => void; // обновление активного id
}

export const useCategoryStore = create<State>()((set) => ({
    activeId: 1,
    setActiveId: (activeId: number) => set({activeId})
}))