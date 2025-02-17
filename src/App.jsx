import { useState } from "react";
import styles from "./app.module.css";

const formatDate = (date) => {
	var dd = String(date.getDate()).padStart(2, "0");
	var mm = String(date.getMonth() + 1).padStart(2, "0");
	var yyyy = date.getFullYear();
	var hours = String(date.getHours()).padStart(2, "0");
	var minutes = String(date.getMinutes()).padStart(2, "0");
	var seconds = String(date.getSeconds()).padStart(2, "0");

	return `${dd}.${mm}.${yyyy} ${hours}:${minutes}:${seconds}`;
};

function App() {
	const [value, setValue] = useState("");
	const [error, setError] = useState("");
	const [list, setList] = useState([]);

	const onInputButtonClick = () => {
		const promptValue = prompt("Введите значение");
		if (promptValue.length < 3) {
			setError("Введенное значение должно содержать минимум 3 символа");
		} else {
			setValue(promptValue);
			setError("");
		}
	};

	const onAddButtonClick = () => {
		setList([
			...list,
			{ id: Date.now(), value, createDate: formatDate(new Date()) },
		]);
		setValue("");
	};

	return (
		<>
			<h1 className={styles["page-heading"]}>Ввод значения</h1>
			<p className={styles["no-margin-text"]}>
				Текущее значение <code>value</code>: {'"'}
				<output className={styles["current-value"]}>{value}</output>
				{'"'}
			</p>
			{error && <div className={styles.error}>{error}</div>}
			<div className={styles["buttons-container"]}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					disabled={!value}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles["list-container"]}>
				<h2 className={styles["list-heading"]}>Список:</h2>
				{!list.length && (
					<p className={styles["no-margin-text"]}>
						Нет добавленных элементов
					</p>
				)}
				<ul className={styles.list}>
					{list.map(({ id, value }) => (
						<li className={styles.listItem} key={id}>
							{value}
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default App;
