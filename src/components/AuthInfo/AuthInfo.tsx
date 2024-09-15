import { useAuthStore } from "@/store/authStore";
import { usersStore } from "@/store/usersStore";
import { Typography, Button } from "@mui/material";

export const AuthInfo = () => {
	const { userId, restIsAuth } = useAuthStore();
	const { getUserById } = usersStore();

	const user = getUserById(userId);

	return (
		<div>
			{user && <Typography variant="body1">{user.login}</Typography>}
			<Button
				variant="outlined"
				size="small"
				onClick={() => {
					restIsAuth();
				}}
			>
				Выход
			</Button>
		</div>
	);
};
