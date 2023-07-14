import React, {
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';

import { Link } from 'react-router-dom';
import { Image, HeartComponent } from '../../components';
import { StarIcon } from '../icons';

import styles from './WineCard.module.scss';
import { OneComment } from '../../types/OneComment';
import { getComments } from '../../api/commets';

type Props = {
  wineId: string;
  name: string;
  price: string;
  image: string;
};

export const WineCard = React.memo<Props>(({ wineId, name, price, image }) => {
  const [comments, setComments] = useState<OneComment[]>([]);

  const rating = useMemo(() => {
    const hasRating = comments.filter(comment => comment.rating !== 0);

    const rate: number = hasRating
      .map(comment => comment.rating)
      .reduce((prev, next) => prev + next, 0) / hasRating.length;

    return Math.round(rate * 10) / 10;
  }, [comments])

  const getAllComments = useCallback(async () => {
    try {
      const data = await getComments(wineId);

      setComments(data);
    } catch (error) {
      console.log(error);
    }
  }, [wineId]);

  useEffect(() => {
    getAllComments();
  }, [getAllComments, wineId]);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.rateGroup}>
          <StarIcon />
          <div className={styles.rate}>{rating ? rating : ''}</div>
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