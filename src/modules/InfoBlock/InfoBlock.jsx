import styles from './info-block.module.css';
import Title from 'shared/components/Title/Title';

const InfoBlock = () => {
  return (
    <div className={styles.container}>
      <Title text="Phonebook App" />
      <p className={styles.text}>
        Hello, you need to register or log in to use this application. Please,
        select your option from the top right in the Navigation Bar.
      </p>
      <p className={styles.wish}>
        We wish you comfortable use of our product is designed specifically for
        you!
      </p>
    </div>
  );
};

export default InfoBlock;
