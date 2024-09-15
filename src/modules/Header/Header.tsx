"use client";
import { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { Button } from "@mui/material";
import { AuthInfo } from "@/components/AuthInfo/AuthInfo";

import styles from "./styles.module.css";
import { Modal } from "@/modules/Modal/Modal";

export default function Header() {
	const { userId } = useAuthStore();
	const [showModal, setShowModal] = useState(false);

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
								setShowModal(true);
							}}
						>
							Вход
						</Button>
					)}
				</div>
			</div>
			{showModal && <Modal closeWindow={setShowModal}></Modal>}
		</header>
	);
}
