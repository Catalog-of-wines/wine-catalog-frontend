import { Link } from 'react-router-dom';
import styles from './ItemHead.module.scss';
import { Arrow } from '../icons';

export const ItemHead = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className={styles.itemHead}>
      <Link to="#" className={styles.arrowBack} onClick={goBack}>
        <Arrow className={styles.arrowIcon} />
      </Link>
    </div>
  )
};
