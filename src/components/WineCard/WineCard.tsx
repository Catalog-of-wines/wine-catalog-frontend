// import './WineCard.scss';
import styles from './WineCard.module.scss';
import { Image } from '../../components/Image';
import { StarIcon } from '../Icons/StarIcon'
import { HeartIcon } from '../Icons/HeartIcon'
import { Link } from 'react-router-dom';

type Props = {
  wineId: string;
  name: string;
  price: string;
  image: string;
};

export const WineCard: React.FC<Props> = ({ wineId, name, price, image }) => {
  // console.log('wineId', wineId);
  
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.rateGroup}>
          <StarIcon />
          <div className={styles.rate}>4.5</div>
        </div>
          <HeartIcon />
      </div>

      <Link
        to={`/catalog/${wineId}`}
        // to={`${user.id}`}
        // className={styles.name}
      >
        <Image
          src={image}
          alt={name}
          className={styles.image}
        />
      </Link>

      {/* <img src="src/images/img_wine.png" alt="dddddd" className={styles.image} /> */}

      <Link
        to={`/catalog/${wineId}`}
      >
        <h4 className={styles.name}>{name}</h4>
      </Link>

      <p className={styles.price}>{price}</p>
    </div>
  )
}