import { useState } from "react";
import styles from "./app.module.css";

function App() {
	const [value, setValue] = useState("");
	const [error, setError] = useState(false);
	const [items, setItems] = useState([]);
	const errorElement = (
		<div className={styles.error}>
			Введенное значение должно содержать минимум 3 символа
		</div>
	);
	const textNotElement = (
		<p className={styles.noMarginText}>Нет добавленных элементов</p>
	);

	return (
		<>
			<h1 className={styles.pageHeading}>Ввод значения</h1>
			<p className={styles.noMarginText}>
				Текущее значение <code>value</code>: {'"'}
				<output className={styles.currentValue}>{value}</output>
				{'"'}
			</p>
			{error && errorElement}
			<div className={styles.buttonsContainer}>
				<button className={styles.button}>Ввести новое</button>
				<button className={styles.button} disabled>
					Добавить в список
				</button>
			</div>
			<div className={styles.listContainer}>
				<h2 className={styles.listHeading}>Список:</h2>
				{!items.length && textNotElement}
				<ul className={styles.list}>
					<li className={styles.listItem}>Первый элемент</li>
				</ul>
			</div>
		</>
	);
}

export default App;
