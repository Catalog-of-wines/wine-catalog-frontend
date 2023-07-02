import React from 'react';
import { Link } from 'react-router-dom';
import { Image, HeartComponent } from '../../components';
import { StarIcon } from '../icons';

import styles from './WineCard.module.scss';

type Props = {
  wineId: string;
  name: string;
  price: string;
  image: string;
};

export const WineCard = React.memo<Props>(({ wineId, name, price, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.rateGroup}>
          <StarIcon />
          <div className={styles.rate}>4.5</div>
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