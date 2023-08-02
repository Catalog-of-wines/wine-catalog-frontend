import styles from './SideMenu.module.scss';
import { Category, CategoriesList } from './components';
import { getAromaCategories } from '../../api/catalog';
import { FC, useEffect, useMemo, useState } from 'react';
import { OnChange } from '../../types/events';
import { capacityData, colorData, countryData, foodData, moodData, wineTypeData } from './dataCategories';

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
      label: 'Аромат',
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
    {
      label: 'Поєднання з їжею',
      children: (
        <CategoriesList
          title="food"
          type="checkbox"
          list={foodData}
          handleOnChange={handleOnChange}
          selectedCategories={selectedCategories}
        />
      ),
    },
    {
      label: 'Колір',
      children: (
        <CategoriesList
          title="by-color"
          type="checkbox"
          list={colorData}
          handleOnChange={handleOnChange}
          selectedCategories={selectedCategories}
        />
      ),
    },
    {
      label: 'Країна',
      children: (
        <CategoriesList
          title="by-country"
          type="checkbox"
          list={countryData}
          handleOnChange={handleOnChange}
          selectedCategories={selectedCategories}
        />
      ),
    },
    {
      label: 'Солодкість',
      children: (
        <CategoriesList
          title="by-wine-type"
          type="checkbox"
          list={wineTypeData}
          handleOnChange={handleOnChange}
          selectedCategories={selectedCategories}
        />
      ),
    },
    {
      label: `Об'єм`,
      children: (
        <CategoriesList
          title="by-capacity"
          type="checkbox"
          list={capacityData}
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
