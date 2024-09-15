import React, { useState } from "react";
import {
	Box,
	TextField,
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
	Button,
	FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { usersStore } from "@/store/usersStore";
import { useAuthStore } from "@/store/authStore";

import styles from "./styles.module.css";

interface IAuthFormProps {
	closeModal: (val: boolean) => void;
}

export const AuthForm: React.FC<IAuthFormProps> = ({ closeModal }) => {
	const [login, setLogin] = useState<string>("");
	const [loginText, setLoginText] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [passwordText, setPasswordText] = useState<string>("");
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const { setIsAuth } = useAuthStore();

	const { getUserByLogin } = usersStore();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		let isError = false;

		if (login.length === 0) {
			setLoginText(getMessage("l01"));
			isError = true;
		}
		if (password.length === 0) {
			setPasswordText(getMessage("p01"));
			isError = true;
		}
		if (isError) {
			return;
		}

		const user = getUserByLogin(login);
		if (!user) {
			setLoginText(getMessage("l02"));
			return;
		}
		if (user.password !== password) {
			setPasswordText(getMessage("p02"));
			return;
		}

		setIsAuth(user.id);
		closeModal(false);
	};

	const getMessage = (typeError: string) => {
		switch (typeError) {
			case "l01":
				return "Введите ваш логин";
			case "l02":
				return "Пользователь не найден";
			case "p01":
				return "Введите пароль";
			case "p02":
				return "Пароль неверный";
			default:
				return "";
		}
	};

	return (
		<Box component="form" onSubmit={handleSubmit} className={styles.form}>
			<FormControl>
				<TextField
					label="Логин"
					variant="outlined"
					onChange={(e) => {
						setLogin(e.target.value);
						setLoginText("");
					}}
				/>
				{loginText && <FormHelperText>{loginText}</FormHelperText>}
			</FormControl>

			<FormControl variant="outlined">
				<InputLabel htmlFor="outlined-adornment-password">
					Пароль
				</InputLabel>
				<OutlinedInput
					id="outlined-adornment-password"
					type={showPassword ? "text" : "password"}
					onChange={(e) => {
						setPassword(e.target.value);
						setPasswordText("");
					}}
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={() => {
									setShowPassword(!showPassword);
								}}
								edge="end"
							>
								{showPassword ? (
									<VisibilityOff />
								) : (
									<Visibility />
								)}
							</IconButton>
						</InputAdornment>
					}
					label="Пароль"
				/>
				{passwordText && (
					<FormHelperText>{passwordText}</FormHelperText>
				)}
			</FormControl>
			<Button type="submit" variant="contained">
				Вход
			</Button>
		</Box>
	);
};
