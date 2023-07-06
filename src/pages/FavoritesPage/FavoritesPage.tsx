import { useEffect, useState } from "react";
import classNames from "classnames";
import { useAppSelector } from "../../app/hooks";
import { getOneWine } from "../../api/catalog";

import { Button, SmallPageTitle, WineList } from "../../components";
import { Wine } from "../../types/Wine";

import styles from './FavoritesPage.module.scss';
// import '../../styles/grid.scss';

export const FavoritesPage: React.FC = () => {
  const favorites: string[] = useAppSelector((state) => state.favorites);

  const [wines, setWines] = useState<Wine[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const hasFavorites = favorites.length !== 0;
  const limit = 6;

  useEffect(() => {
    try {
      const skip = startIndex + limit;
      const fetchData = async (): Promise<void> => {
        const fetchedProducts = await Promise.all(
          favorites.slice(startIndex, skip).map(id => getOneWine(id))
        );

        setWines(current => [...current, ...fetchedProducts]);
        setIsLoading(false);
      };

      void fetchData();
    } catch (error) {
      console.log('error>>>', error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startIndex]);

  const handleShowMore = () => {
    setStartIndex(current => current + limit);
  }

  return (
    <div className={styles.grid}>
      <div className={styles.contentGrid}>
        <SmallPageTitle>
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