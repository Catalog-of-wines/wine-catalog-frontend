import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Image, HeartComponent } from '../../components';
import { StarIcon } from '../icons';
import { averageRating } from '../../utils/averageRating';
import { useAppSelector } from '../../app/hooks';
import styles from './WineCard.module.scss';

type Props = {
  wineId: string;
  name: string;
  price: string;
  image: string;
};

export const WineCard = React.memo<Props>(({ wineId, name, price, image }) => {
  const { items: activeComments } = useAppSelector(state => state.activeCommentsList);

  const comments = useMemo(() =>
    activeComments.find(comment => comment[0]?.wine_id === wineId),
    [activeComments, wineId]
  );

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.rateGroup}>
          <StarIcon />
          <div className={styles.rate}>{comments ? averageRating(comments) : ''}</div>
        </div>

        <HeartComponent wineId={wineId} />
      </div>

      <Link
        to={`/catalog/${wineId}`}
      >
        <Image
          src={image}
          alt={name}
          className={styles.image}
        />
      </Link>

      <Link
        to={`/catalog/${wineId}`}
      >
        <h4 className={styles.name}>{name}</h4>
      </Link>

      <p className={styles.price}>{price}</p>
    </div>
  )
})
