import styles from "./Input.module.css";

const Input = () => {
  return (
    <div className={styles.wrap}>
      <p className={styles.title}>Начисление кешбека с покупки</p>
      <input className={styles.input} />
    </div>
  );
};

export default Input;
