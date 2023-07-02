import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Button, ButtonGroup, SideMenu, WineCard } from '../../components';

import * as wineActions from '../../features/activeWineList/activeWineListSlice';

import styles from './Catalog.module.scss';
import '../../styles/grid.scss';

export const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items: wines } = useAppSelector(state => state.activeWineList);
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();

  useEffect(() => {

    const skip = searchParams.get('skip');

    const query = skip ? `${pathname}?skip=${skip}` : pathname;
    dispatch(wineActions.initActiveWineList(query));
  }, [dispatch, pathname, searchParams]);

  const handleShowMore = (): void => {
    const skip = searchParams.get('skip') || '0';

    setSearchParams({ skip: `${+skip + 9}` });
  };

  return (
    <div className={styles.catalog}>
      <div className="grid">
        <div className="grid__item grid__item--desktop-1-3">
          <SideMenu />
        </div>

        <div className="grid__item grid__item--desktop-4-12">

          <ButtonGroup setSearchParams={setSearchParams} />

          {/* <div className={styles.catalogWineSort}>
            <div className={styles.wineSort}>
              <div className={styles.wineSortTitle}>Сортування:</div>
              <div className={styles.wineSortCategory}>Популярність</div>
              <DownIcon />
            </div>
          </div> */}

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
