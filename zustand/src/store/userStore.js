import { create } from 'zustand';

export const useUserStore = create((set) => ({
  user: {
    name: '',
    email: '',
    password: '',
  },

  setUser: (userData) => set({ user: userData }),

  updateField: (field, value) =>
    set((state) => ({
      user: {
        ...state.user,
        [field]: value,
      },
    })),
    
  resetUser: () =>
    set({
      user: {
        name: '',
        email: '',
        password: '',
      },
    }),
}));
