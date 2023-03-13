import styles from './button.module.scss';

const Button = ({ text, type }) => {
  return (
    <button type={type} className={styles.btn}>
      {text}
    </button>
  );
};

export default Button;
