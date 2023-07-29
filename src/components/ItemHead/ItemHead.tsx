import { Link } from 'react-router-dom';
import { Arrow } from '../icons';
import styles from './ItemHead.module.scss';

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
