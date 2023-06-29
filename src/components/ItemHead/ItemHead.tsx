import { NavLink } from 'react-router-dom';
import styles from './ItemHead.module.scss';
import { Arrow } from '../../icons';

export const ItemHead = () => (
  <div className={styles.itemHead}>
    <NavLink to="/catalog" className={styles.arrowBack}>
      <Arrow className={styles.arrowIcon} />
    </NavLink>
  </div>
);
