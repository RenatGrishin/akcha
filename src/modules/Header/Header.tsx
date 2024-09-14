"use client";
import { useAuthStore } from "@/store/authStore";
import { Button } from "@mui/material";
import { AuthInfo } from "@/components/AuthInfo/AuthInfo";

import styles from "./styles.module.css";
import { Modal } from "@/modules/Modal/Modal";

export default function Header() {
	const { userId, setIsAuth } = useAuthStore();
	return (
		<header className={styles.header}>
			<div className={`container ${styles.container}`}>
				<div>Logo</div>
				<div className={styles.logInOut}>
					{userId !== false ? (
						<AuthInfo />
					) : (
						<Button
							variant="outlined"
							size="small"
							onClick={() => {
								setIsAuth(0);
							}}
						>
							Вход
						</Button>
					)}
				</div>
			</div>
			<Modal></Modal>
		</header>
	);
}
