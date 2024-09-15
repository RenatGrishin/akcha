import create from "zustand";

interface IAuthState {
	userId: number | false;
	restIsAuth: () => void;
	setIsAuth: (id: number) => void;
}

export const useAuthStore = create<IAuthState>((set) => ({
	userId: false,
	restIsAuth: () => set({ userId: false }),
	setIsAuth: (id) => set({ userId: id }),
}));
