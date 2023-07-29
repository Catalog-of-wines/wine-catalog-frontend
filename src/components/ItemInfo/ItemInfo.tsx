import { FC, useMemo } from 'react';
// @ts-ignore
import ReactReadMoreReadLess from 'react-read-more-read-less';
import { averageRating } from '../../utils/averageRating';
import { ItemInfoList } from './ItemInfoList';
import { HeartComponent } from '../HeartComponent';
import { StarIcon } from '../icons';
import { Wine } from '../../types/Wine';
import { OneComment } from '../../types/OneComment';
import styles from './ItemInfo.module.scss';

interface Props {
  wine: Wine,
  comments: OneComment[],
}

export const ItemInfo: FC<Props> = ({ wine, comments }) => {
  const {
    id,
    name,
    color,
    wine_type,
    country,
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
      term: 'Бренд',
      definition: brand,
    },
    {
      term: 'Алкоголь',
      definition: alcohol_percentage,
    },
    {
      term: 'Смаки',
      definition: description.name,
    },
    {
      term: 'Аромат',
      definition: description.aroma,
    },
    {
      term: 'Поєднання',
      definition: description.gastronomic,
    },
  ];

  const response = useMemo(() => {
    if (comments.length === 1) {
      return 'відгук';
    }

    return comments.length < 5 ? 'відгуки' : 'відгуків';
  }, [comments])

  return (
    <div className={styles.itemInfo}>
      <div className={styles.header}>
        <h2 className={styles.heading}>{name}</h2>
        <HeartComponent wineId={id} />
      </div>

      {comments.length > 0 &&
        <div className={styles.rateGroup}>
          <StarIcon />
          <div className={styles.rate}>{averageRating(comments) || ''}</div>
          <div className={styles.response}>{`(${comments.length} ${response})`}</div>
        </div>}

      <div className={styles.itemInfoListWrap}>
        {wineInfo.map(({ term, definition }) => (
          <ItemInfoList key={term} term={term} definition={definition} />
        ))}
      </div>
      <div className={styles.description}>
        {description.why_buy &&
          <ReactReadMoreReadLess
            charLimit={210}
            readMoreText="Читати повністю"
            readLessText="Приховати"
            className="test"
          >
            {description.why_buy}
          </ReactReadMoreReadLess>}
      </div>
    </div>
  );
};
