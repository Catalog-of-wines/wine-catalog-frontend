import styles from './SideMenu.module.scss';
import { Category, CategoriesList } from './components/index';
import { getAromaCategories } from '../../api/catalog';
import { useEffect, useState } from 'react';

const moodData = ['Святковий', 'Романтичний'];

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

  useEffect(() => {
    getAroma();
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
