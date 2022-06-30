import styles from "./Description.module.scss";

const Description = ({ description }) => {
  return (
    <ul>
      {description.map((des, index) => (
        <div className={styles.message__list} key={des.id}>
          <li className={styles.grid}>
            <>
              <div className={styles.grid__item}>{des.text}</div>
              <div className={styles.grid__item}>{des.count}</div>
              <div className={styles.grid__item}>{des.izm}</div>
            </>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default Description;
