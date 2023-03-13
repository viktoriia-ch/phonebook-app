import styles from './not-found-page.module.css';
import Title from 'shared/components/Title/Title';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <Title text="404" />
      <p> </p>
      <Title text="Not found" />
    </div>
  );
};

export default NotFoundPage;
