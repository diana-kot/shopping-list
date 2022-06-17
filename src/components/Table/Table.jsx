import styles from "./Table.module.scss";

const Table = () => {
  return (
    <>
      <div className={styles.grid}>
        <div className={styles.grid__item}>1</div>
        <div className={styles.grid__item}>2</div>
        <div className={styles.grid__item}>2</div>
        <div className={styles.grid__item}>2</div>
        <div className={styles.grid__item}>2</div>
        <div className={styles.grid__item}>2</div>
        <div className={styles.grid__item}>2</div>
        <div className={styles.grid__item}>2</div>
        <div className={styles.grid__item}>2</div>
      </div>
    </>
  );
};

export default Table;
