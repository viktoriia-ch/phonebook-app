import { ThreeCircles } from 'react-loader-spinner';
import styles from './loader.module.css';

const Loader = () => {
  return (
    <div className={styles.container}>
      <ThreeCircles
        height="100"
        width="100"
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#66b2b2"
        innerCircleColor="#008080"
        middleCircleColor="#006666"
      />
    </div>
  );
};

export default Loader;
