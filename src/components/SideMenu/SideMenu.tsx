import styles from './SideMenu.module.scss';
import { Category, CategoriesList } from './components';
import { getAromaCategories } from '../../api/catalog';
import { FC, useEffect, useMemo, useState } from 'react';
import { OnChange } from '../../types/events';

interface Props {
  handleOnChange: (e: OnChange) => void;
  selectedCategories: string[];
}

export const SideMenu: FC<Props> = ({ selectedCategories, handleOnChange }) => {
  const [taste, setTaste] = useState<string[]>([]);

  const getAroma = async () => {
    try {
      const data = await getAromaCategories();

      setTaste(data.slice(1));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAroma();
  }, []);

  const moodData = [
    {
      id: 'festive',
      label: 'Святковий',
    },
    {
      id: 'romantic',
      label: 'Романтичний',
    },
  ];
  const tasteData = useMemo(
    () => taste.map((item) => ({ label: item, id: item })),
    [taste]
  );

  const categories = [
    {
      label: 'Настрій',
      children: (
        <CategoriesList
          type="radio"
          list={moodData}
          name="mood"
          title="mood"
          handleOnChange={handleOnChange}
          selectedCategories={selectedCategories}
        />
      ),
    },
    {
      label: 'Смак',
      children: (
        <CategoriesList
          title="aroma"
          type="checkbox"
          list={tasteData}
          handleOnChange={handleOnChange}
          selectedCategories={selectedCategories}
        />
      ),
    },
  ];

  return (
    <ul className={styles.sideMenu}>
      <li className={styles.title}>
        <span className={styles.icon} />
        <h3 className={styles.text}>Фільтри</h3>
      </li>

      {categories.map(({ label, children }) => (
        <Category children={children} key={label} label={label} />
      ))}
    </ul>
  );
};
