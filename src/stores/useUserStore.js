import { create } from 'zustand'

export const useUserStore = create((set) => (
    {
        users: [],
        setUser: (users) => set({ users }),
    }
));