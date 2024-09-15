import styles from "./styles.module.css";
import { AuthForm } from "@/components/AuthForm/AuthForm";

interface IModalProps {
	closeWindow: (val: boolean) => void;
}
export const Modal: React.FC<IModalProps> = ({ closeWindow }) => {
	return (
		<div className={styles.modal}>
			<div
				className={styles.closeDiv}
				onClick={() => {
					closeWindow(false);
				}}
			>
				<div className={styles.closeIcon}></div>
			</div>
			<div className={styles.body}>
				<AuthForm closeModal={closeWindow} />
			</div>
		</div>
	);
};
