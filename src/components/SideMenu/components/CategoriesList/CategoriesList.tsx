import { FC } from 'react';
import { Checkbox, Radio } from '../../../index';
import styles from './CategoriesList.module.scss';
import { OnChange } from '../../../../types/events';

export interface CategoriesListProps {
  categoryName: string;
  list: string[];
  type: 'radio' | 'checkbox';
  name?: string;
  selectedCategories: string[];
  handleOnChange: (e: OnChange) => void;
}

export const CategoriesList: FC<CategoriesListProps> = ({
  categoryName,
  list,
  type,
  name = '',
  selectedCategories,
  handleOnChange,
}) => (
  <ul className={styles.categoriesList}>
    {type === 'checkbox'
      ? list.map((category) => (
          <li className={styles.categoriesItem} key={category}>
            <Checkbox
              checked={selectedCategories.includes(category)}
              id={category}
              label={category}
              name={category}
              onChange={handleOnChange}
              categoryName={categoryName}
            />
          </li>
        ))
      : list.map((category) => (
          <li className={styles.categoriesItem} key={category}>
            <Radio
              checked={selectedCategories.includes(category)}
              id={category}
              label={category}
              name={name}
              onChange={handleOnChange}
              categoryName={categoryName}
            />
          </li>
        ))}
  </ul>
);
