import { useEffect, useState } from "react";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getOneWine } from "../../api/catalog";
import * as commentsActions from '../../features/activeCommentsList/activeCommentsListSlice';

import { Button, SmallPageTitle, WineList } from "../../components";
import { Wine } from "../../types/Wine";

import styles from './FavoritesPage.module.scss';

export const FavoritesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const favorites: string[] = useAppSelector((state) => state.favorites);
  const [wines, setWines] = useState<Wine[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const hasFavorites = favorites.length !== 0;
  const limit = 6;

  const fetchData = async (): Promise<void> => {
    const skip = startIndex + limit;
    setIsLoading(true);

    try {
      setIsError(false);
      const fetchedProducts = await Promise.all(
        favorites.slice(startIndex, skip).map(id => getOneWine(id))
      );

      setWines(current => [...current, ...fetchedProducts]);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [startIndex]);

  useEffect(() => {
    dispatch(commentsActions.initActiveCommentsList(favorites));
  }, [dispatch, favorites]);

  const handleShowMore = () => {
    setStartIndex(current => current + limit);
  }

  if (isError) {
    return (
      <SmallPageTitle className={styles.title}>
        Не вдалося завантажити обране
      </SmallPageTitle>
    )
  }

  return (
    <div className={styles.grid}>
      <div className={styles.contentGrid}>
        <SmallPageTitle className={styles.title}>
          {hasFavorites
            ? 'Обране'
            : 'У вас покищо немає обраного'
          }
        </SmallPageTitle>
      </div>

      <div className={styles.contentGrid}>
        {!isLoading && hasFavorites &&
          <div className={styles.wineCards}>
            <WineList wines={wines} />
          </div>
        }

        {isLoading &&
          <div className={classNames('loader', styles.loader)}></div>
        }
      </div>

      {favorites.length > limit &&
        wines.length < favorites.length &&
        !isLoading &&
        <div className={styles.buttonGrid}>
          <Button className={styles.showMoreBtn} onClick={handleShowMore}>
            <p className={styles.showMoreBtnText}>Показати більше</p>
          </Button>
        </div>
      }
    </div>
  )
}
