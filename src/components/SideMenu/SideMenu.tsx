import styles from './SideMenu.module.scss';
import { Category, CategoriesList } from './components';
import { getAromaCategories } from '../../api/catalog';
import { FC, useEffect, useState } from 'react';
import { OnChange } from '../../types/events';

interface Props {
  handleOnChange: (e: OnChange) => void;
  selectedCategories: string[];
}

const moodData = ['Святковий', 'Романтичний'];

export const SideMenu: FC<Props> = ({
  selectedCategories,
  handleOnChange,
}) => {
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

  const categories = [
    {
      title: 'Настрій',
      children: (
        <CategoriesList
          type="radio"
          list={moodData}
          name="mood"
          categoryName="Настрій"
          handleOnChange={handleOnChange}
          selectedCategories={selectedCategories}
        />
      ),
    },
    {
      title: 'Смак',
      children: (
        <CategoriesList
          categoryName="Смак"
          type="checkbox"
          list={taste}
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

      {categories.map(({ title, children }) => (
        <Category title={title} children={children} key={title} />
      ))}
    </ul>
  );
};
