import notFoundImg from '../../shared/images/not-found-error.png';
import styles from './not-found-page.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <img
        src={notFoundImg}
        className={styles.image}
        alt="This page is not found!"
      />
    </div>
  );
};

export default NotFoundPage;
