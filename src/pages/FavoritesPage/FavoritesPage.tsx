import { useEffect, useMemo, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { Button, SmallPageTitle, WineList } from "../../components";
import { Wine } from "../../types/Wine";
import { getOneWine } from "../../api/catalog";

import styles from './FavoritesPage.module.scss';
import '../../styles/grid.scss';
import classNames from "classnames";
export const FavoritesPage: React.FC = () => {
  const favorites: string[] = useAppSelector((state) => state.favorites);

  const [wines, setWines] = useState<Wine[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const hasFavorites = favorites.length !== 0;
  const limit = 6;

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const fetchedProducts = await Promise.all(
        favorites.map(id => getOneWine(id))
      );

      setWines(fetchedProducts);
      setIsLoading(false);
    };

    void fetchData();
  }, [favorites]);

  const handleShowMore = () => {
    if (skip + limit >= wines.length) {
      setSkip(0);

      return;
    }

    setSkip(current => current + limit);
  }

  const winesToShow = useMemo(() => {
    return wines.slice(skip, skip + limit)
  }, [skip, wines])


  console.log('wines>>>>>', wines.length);
  // console.log('wines>>>>>', isLoading);
  console.log('wines>>>>>', hasFavorites);
  // console.log('wines>>>>>', skip);

  return (
    <div className="grid">
      <div className="grid__item grid__item--desktop-2-10">
        <SmallPageTitle>{hasFavorites ? 'Обране' : 'У вас покищо немає обраного'}</SmallPageTitle>
      </div>

      <div className="grid__item grid__item--desktop-2-8">
        {isLoading &&
          <div className={classNames('loader', styles.loader)}></div>
        }

        {!isLoading && hasFavorites && <div className={styles.wineCards}>
          <WineList wines={winesToShow} />
        </div>
        }
      </div>

      {hasFavorites &&
        <div className="grid__item grid__item--desktop-5-7">
          <Button className={styles.showMoreBtn} onClick={handleShowMore}>
            <p className={styles.showMoreBtnText}>
              {skip + limit <= favorites.length || skip + limit <= limit
                ? 'Показати більше'
                : 'Повернутися'
              }
            </p>
          </Button>
        </div>
      }
    </div>
  )
}