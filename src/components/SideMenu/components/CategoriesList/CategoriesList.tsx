import { FC } from 'react';
import { Checkbox, Radio } from '../../../index';
import styles from './CategoriesList.module.scss';
import { OnChange } from '../../../../types/events';

type ControlData = {
  id: string,
  label: string;
}

export interface CategoriesListProps {
  title: string;
  list: ControlData[];
  type: 'radio' | 'checkbox';
  name?: string;
  selectedCategories: string[];
  handleOnChange: (e: OnChange) => void;
}

export const CategoriesList: FC<CategoriesListProps> = ({
  title,
  list,
  type,
  name = '',
  selectedCategories,
  handleOnChange,
}) => (
  <ul className={styles.categoriesList}>
    {type === 'checkbox'
      ? list.map(({ id, label }) => (
          <li className={styles.categoriesItem} key={id}>
            <Checkbox
              checked={selectedCategories.includes(id)}
              id={id}
              label={label}
              name={id}
              onChange={handleOnChange}
              categoryName={title}
            />
          </li>
        ))
      : list.map(({ id, label }) => (
          <li className={styles.categoriesItem} key={id}>
            <Radio
              checked={selectedCategories.includes(id)}
              id={id}
              label={label}
              name={name}
              onChange={handleOnChange}
              categoryName={title}
            />
          </li>
        ))}
  </ul>
);
