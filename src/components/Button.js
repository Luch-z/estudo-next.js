import styles from "./Button.module.css";

export default function Button({ primary }) {
    return (
        <button className={`${styles.button} ${primary ? styles.primary : ""}`}>
            ; Clique Aqui
        </button>
    );
}
