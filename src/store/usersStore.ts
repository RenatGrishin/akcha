import { create } from "zustand";

interface IUsers {
	id: number;
	login: string;
	password: string;
}
interface IUserStore {
	users: IUsers[];
	getUserById: (id: number | false) => IUsers | undefined;
}

export const usersStore = create<IUserStore>((set, get) => ({
	users: [
		{
			id: 0,
			login: "Admin",
			password: "adm123",
			role: 1,
		},
		{
			id: 1,
			login: "Renat",
			password: "rnt123",
			role: 2,
		},
	],
	getUserById: (id) => get().users.find((user) => user.id === id),
}));
