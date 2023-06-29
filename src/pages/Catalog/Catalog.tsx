import styles from './Catalog.module.scss';
import '../../styles/grid.scss';
import { SideMenu } from '../../components/SideMenu';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';
import * as wineActions from '../../features/activeWineList/activeWineListSlice';
import * as setEndPoint from '../../features/endPoint/endPointSlice';
import { WineCard } from '../../components/WineCard';
import { ChampagneIcon } from '../../components/Icons/ChampagneIcon';
import { WineIcon } from '../../components/Icons/WineIcon';
import { DownIcon } from '../../components/Icons/DownIcon';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { EndPoint } from '../../types/EndPoint';
import { Button } from '../../components/Button';
import classNames from "classnames";

export const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items: wines } = useAppSelector(state => state.activeWineList);
  const endPoint = useAppSelector(state => state.endPoint);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // console.log('endPoint>>>', endPoint);
  
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
    setSearchParams({});
    dispatch(setEndPoint.set(EndPoint.CATALOG));
    navigate(`/${EndPoint.CATALOG}`);
  };

  const handleShowChampagne = (): void => {
    setSearchParams({});
    dispatch(setEndPoint.set(EndPoint.CHAMPAGNE));
    navigate(`/${EndPoint.CHAMPAGNE}`);
  };

  const handleShowWine = (): void => {
    setSearchParams({});
    dispatch(setEndPoint.set(EndPoint.WINE));
    navigate(`/${EndPoint.WINE}`);
  };

  return (
    <div className={styles.catalog}>
      <div className="grid">
        <div className="grid__item grid__item--desktop-1-3">
          <SideMenu />
        </div>

        <div className="grid__item grid__item--desktop-4-12">
        <div className={styles.catalogWineFilter}>
            <Button 
              className={classNames(
                styles.wineFilterBtn,
                styles.wineFilterBtnBorder,
                {[styles.wineFilterBtnActive]: endPoint === EndPoint.CATALOG}
              )} 
              onClick={handleShowAll}
            >
              <ChampagneIcon />
              <div 
                className={classNames(
                  styles.wineFilterText,
                  {[styles.wineFilterTextActive]: endPoint === EndPoint.CATALOG}
                )}
              >
                Все
              </div>
              <WineIcon />
            </Button>

            <div className={styles.wineFilterBtnGroup}>
              <Button 
                className={classNames(
                  styles.wineFilterBtn,
                  {[styles.wineFilterBtnActive]: endPoint === EndPoint.CHAMPAGNE}
                )}
                onClick={handleShowChampagne}
              >
                <ChampagneIcon />
                <div 
                  className={classNames(
                    styles.wineFilterText,
                    {[styles.wineFilterTextActive]: endPoint === EndPoint.CHAMPAGNE}
                  )}
                >
                  Шампанське та ігристе
                </div>
              </Button>

              <Button 
                className={classNames(
                  styles.wineFilterBtn,
                  {[styles.wineFilterBtnActive]: endPoint === EndPoint.WINE}
                )} 
                onClick={handleShowWine}
              >
                <div 
                  className={classNames(
                    styles.wineFilterText,
                    {[styles.wineFilterTextActive]: endPoint === EndPoint.WINE}
                  )}
                >
                  Вино
                </div>
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
          <Button className={styles.ShowMoreBtn} onClick={handleShowMore}>
            <p className={styles.ShowMoreBtnText}>Показати більше</p>
          </Button>
        </div>
      </div>
    </div>
  );
};
