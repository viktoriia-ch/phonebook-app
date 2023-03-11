import { useMemo } from 'react';
import { nanoid } from 'nanoid';

import styles from './text-field.module.css';

const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export default TextField;
