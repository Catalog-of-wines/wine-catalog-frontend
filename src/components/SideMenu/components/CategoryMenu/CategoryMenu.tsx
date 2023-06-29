import { FC } from 'react';
import styles from './CategoryMenu.module.scss';

export interface CategoryMenuProps {
  children: React.ReactNode;
}

export const CategoryMenu: FC<CategoryMenuProps> = ({ children }) => (
  <div className={styles.menu}>
    {children}
  </div>
);
