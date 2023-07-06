import { FC, ReactNode, useState } from 'react';
import styles from './Category.module.scss';
import classNames from 'classnames';
import { CategoryMenu } from '../CategoryMenu';

export interface CategoryProps {
  label: string;
  children: ReactNode;
}

export const Category: FC<CategoryProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCategory = () => setIsOpen((prev) => !prev);

  return (
    <li className={styles.category}>
      <div className={styles.head} onClick={toggleCategory}>
        <span className={styles.title}>{label}</span>
        <span className={classNames(
          styles.arrow,
          { [styles.active]: isOpen },
        )} />
      </div>
      {isOpen && <CategoryMenu>{children}</CategoryMenu>}
    </li>
  );
};
