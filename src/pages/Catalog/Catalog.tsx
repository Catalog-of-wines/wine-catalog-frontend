import styles from './Catalog.module.scss';
import '../../styles/grid.scss';
import { SideMenu } from '../../components/SideMenu';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect, useState } from 'react';
import * as wineActions from '../../features/activeWineList/activeWineListSlice';
import { WineCard } from '../../components/WineCard';
import { ChampagneIcon } from '../../components/Icons/ChampagneIcon';
import { WineIcon } from '../../components/Icons/WineIcon';
import { DownIcon } from '../../components/Icons/DownIcon';
import { useSearchParams } from 'react-router-dom';
import { EndPoint } from '../../types/EndPoint';

export const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items: wines } = useAppSelector(state => state.activeWineList);
  const [searchParams, setSearchParams] = useSearchParams();
  const [endPoint, setEndpoint] = useState(EndPoint.CATALOG);


  useEffect(() => {
    const skip = searchParams.get('skip');

    const query = skip ? `${endPoint}?skip=${skip}` : endPoint;
    dispatch(wineActions.initActiveWineList(query));
  }, [dispatch, endPoint, searchParams]);

  const handleShowMore = (): void => {
    const skip = searchParams.get('skip') || '0';

    setSearchParams({skip: `${+skip + 9}`});
  };

  const handleShowAll = (): void => {
    setEndpoint(EndPoint.CATALOG);
    searchParams.delete('skip');
  };

  const handleShowChampagne = (): void => {
    setEndpoint(EndPoint.CHAMPAGNE);
    searchParams.delete('skip');
  };

  const handleShowWine = (): void => {
    setEndpoint(EndPoint.WINE);
    searchParams.delete('skip');
  };

  return (
    <div className={styles.catalog}>
      <div className="grid">
        <div className="grid__item grid__item--desktop-1-3">
          <SideMenu />
        </div>

        <div className="grid__item grid__item--desktop-4-12">
          <div className={styles.catalogWineFilter}>
            <button type='button' className={styles.wineFilterBtn} onClick={handleShowAll}>
              <ChampagneIcon />
              <div className={styles.wineFilterText}>Все</div>
              <WineIcon />
            </button>

            <div className={styles.wineFilterBtnGroup}>
              <button type='button' className={styles.wineFilterBtn} onClick={handleShowChampagne}>
                <ChampagneIcon />
                <div className={styles.wineFilterText}>Шампанське та ігристе</div>
              </button>

              <button type='button' className={styles.wineFilterBtn} onClick={handleShowWine}>
                <div className={styles.wineFilterText}>Вино</div>
                <WineIcon />
              </button>
            </div>
          </div>

          <div className={styles.catalogWineSort}>
            <div className={styles.wineSort}>
              <div className={styles.wineSortTitle}>Сортування:</div>
              <div className={styles.wineSortCategory}>Популярність</div>
              <DownIcon />
            </div>
          </div>

          <div>
            <div className={styles.wineCards}>
              {wines.map(wine => (
                  <WineCard 
                    key={wine._id}
                    wineId={wine._id}
                    name={wine.name}
                    price={wine.price}
                    image={wine.image_url}
                  />
              ))}
            </div>
          </div>
        </div>

        <div className="grid__item grid__item--desktop-7-9">
          <button type='button' className={styles.ShowMoreBtn} onClick={handleShowMore}>
            <p className={styles.ShowMoreBtnText}>Показати більше</p>
          </button>
        </div>
      </div>
    </div>
  );
};
