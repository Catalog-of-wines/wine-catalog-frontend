import './SideMenu.scss';
import styles from './SideMenu.module.scss';
import { Category, CategoriesList } from './components/index';
import { getAromaCategories, getFoodCategories } from '../../api/catalog';
import { useEffect, useState } from 'react';

const moodData = ['Святковий', 'Романтичний'];
// const tasteData = ['Риба', 'Мясо'];

export const SideMenu = () => {
  const [taste, setTaste] = useState<string[]>([]);
  
  const getAroma = async () => {
    try {
      const data = await getAromaCategories();

      setTaste(data.slice(1));
    } catch (error) {
      console.log(error);
    }
  };

  const getFood = async () => {
    try {
      const food = await getFoodCategories();

      console.log(food);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAroma();
    getFood();
  }, []);

  const categories = [
    {
      title: 'Настрій',
      children: <CategoriesList type="radio" list={moodData} name="mood" />,
    },
    {
      title: 'Смак',
      children: <CategoriesList type="checkbox" list={taste} />,
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
