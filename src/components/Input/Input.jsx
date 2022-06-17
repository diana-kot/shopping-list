import cn from "classnames";

import icon from "./img/cancel.svg";
import styles from "./Input.module.scss";

const Input = ({ value, handleInputChange, placeholder, classes }) => {
  return (
    <div className={cn(styles.wrapper__input, classes)}>
      <input
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />
      {/* <img
        onClick={() => value && handleInputChange("")}
        src={icon}
        className={cn(styles.clear, !value && styles.clear__disabled)}
        alt="Clear"
      /> */}
    </div>
  );
};

export default Input;
