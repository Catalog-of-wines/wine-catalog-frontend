import styles from './WineCard.module.scss';
import { Image } from '../../components/Image';
import { StarIcon, HeartIcon, FilledHeartIcon } from '../icons';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as favoritesActions from '../../features/favorites/favoritesSlice';

type Props = {
  wineId: string;
  name: string;
  price: string;
  image: string;
};

export const WineCard: React.FC<Props> = ({ wineId, name, price, image }) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.favorites);

  const isFavorites = favorites.includes(wineId);

  const handleClick = () => {
    if (isFavorites) {
      dispatch(favoritesActions.removeFromFavorites(wineId));
      
      return;
    }
    dispatch(favoritesActions.addFavorites(wineId));
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.rateGroup}>
          <StarIcon />
          <div className={styles.rate}>4.5</div>
        </div>

        <div className={styles.heart} onClick={handleClick}>
          {isFavorites
            ? <FilledHeartIcon />
            : <HeartIcon />}
        </div>
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
}