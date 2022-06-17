
import styles from "./Button.module.scss";
import cn from "classnames";

const Button = ({ text, onClick, className, disabled }) => {
    return (
      <button
        onClick={onClick}
        className={cn(styles.button, className)}
        disabled={disabled}
      >
        {text}
      </button>
    );
  };


export default Button;