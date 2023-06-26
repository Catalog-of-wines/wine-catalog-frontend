// import './Catalog.scss';
import styles from './Catalog.module.scss';
import '../../styles/grid.scss';
import { SideMenu } from '../../components/SideMenu';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';
import * as wineActions from '../../features/activeWineList/activeWineListSlice';
import { WineCard } from '../../components/WineCard';
import { Button } from '../../components/Button';
import { ChampagneIcon } from '../../components/Icons/ChampagneIcon';
import { WineIcon } from '../../components/Icons/WineIcon';
import { DownIcon } from '../../components/Icons/DownIcon';

export const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items: wines } = useAppSelector(state => state.activeWineList);

  useEffect(() => {
    dispatch(wineActions.initActiveWineList());
  }, [dispatch]);

  console.log('test>>>', wines);
  
  return (
    <div className={styles.catalog}>
      <div className="grid">
        <div className="grid__item grid__item--desktop-1-3">
          <SideMenu />
        </div>

        <div className="grid__item grid__item--desktop-4-12">
          <div className={styles.catalogWineFilter}>
            <Button className={styles.wineFilterBtn}>
              <ChampagneIcon />
              <div className={styles.wineFilterText}>Все</div>
              <WineIcon />
            </Button>
            <div className={styles.wineFilterBtnGroup}>
              <Button className={styles.wineFilterBtn}>
                <ChampagneIcon />
                <div className={styles.wineFilterText}>Шампанське та ігристе</div>
              </Button>
              <Button className={styles.wineFilterBtn}>
                <div className={styles.wineFilterText}>Вино</div>
                <WineIcon />
              </Button>
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
          <Button className={styles.ShowMoreBtn}>
            <p className={styles.ShowMoreBtnText}>Показати більше</p>
          </Button>
        </div>
      </div>
    </div>
  );
};
