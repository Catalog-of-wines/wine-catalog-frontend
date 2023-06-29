import { FC } from 'react';
import { Wine } from '../../types/Wine';
import styles from './ItemInfo.module.scss';
import { Like } from '../../icons';
import { ItemInfoList } from './ItemInfoList';
// @ts-ignore
import ReactReadMoreReadLess from 'react-read-more-read-less';
import { Button } from '../Button';

interface Props {
  wine: Wine;
}

export const ItemInfo: FC<Props> = ({ wine }) => {
  const {
    name,
    color,
    wine_type,
    country,
    region,
    brand,
    alcohol_percentage,
    description,
  } = wine;

  const wineInfo = [
    {
      term: 'Колір',
      definition: color,
    },
    {
      term: 'Солодкість',
      definition: wine_type,
    },
    {
      term: 'Країна',
      definition: country,
    },
    {
      term: 'Регіон',
      definition: region,
    },
    {
      term: 'Бренд',
      definition: brand,
    },
    {
      term: 'Смаки:',
      definition: description.name,
    },
    {
      term: 'Алкоголь',
      definition: alcohol_percentage,
    },
    {
      term: 'Поєднання:',
      definition: description.gastronomic,
    },
  ];

  return (
    <div className={styles.itemInfo}>
      <div className={styles.header}>
        <h2 className={styles.heading}>{name}</h2>
        <Button onClick={() => {}}>
          <Like className={styles.iconLike} />
        </Button>
      </div>
      <div className={styles.itemInfoListWrap}>
        {wineInfo.map(({ term, definition }) => (
          <ItemInfoList key={term} term={term} definition={definition} />
        ))}
      </div>
      <div className={styles.description}>
        <ReactReadMoreReadLess
          charLimit={210}
          readMoreText="Читати повністю"
          readLessText="Приховати"
          className="test"
        >
          {description.why_buy}
        </ReactReadMoreReadLess>
      </div>
    </div>
  );
};
