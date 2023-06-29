import { FC } from 'react';
import { Checkbox, Radio } from '../../../index';
import styles from './CategoriesList.module.scss';

export interface CategoriesListProps {
  list: string[];
  type: 'radio' | 'checkbox';
  name?: string;
}

export const CategoriesList: FC<CategoriesListProps> = ({
  list,
  type,
  name = '',
}) => (
  <ul className={styles.categoriesList}>
    {type === 'checkbox'
      ? list.map((category) => (
          <li className={styles.categoriesItem} key={category}>
            <Checkbox
              id={category}
              label={category}
              name={category}
              onChange={() => {}}
            />
          </li>
        ))
      : list.map((category) => (
          <li className={styles.categoriesItem} key={category}>
            <Radio
              id={category}
              label={category}
              name={name}
              onChange={() => {}}
            />
          </li>
        ))}
  </ul>
);
