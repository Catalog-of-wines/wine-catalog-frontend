import styles from './HeartComponent.module.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as favoritesActions from '../../features/favorites/favoritesSlice';
import { FilledHeartIcon, HeartIcon } from '../icons';

type Props = {
  wineId: string;
};

export const HeartComponent: React.FC<Props> = ({ wineId }) => {
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
    <div className={styles.heart} onClick={handleClick}>
      {isFavorites
        ? <FilledHeartIcon />
        : <HeartIcon />}
    </div>
  )
}