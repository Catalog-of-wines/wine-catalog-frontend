import { useEffect } from 'react';
import * as wineActions from '../../features/activeWineList/activeWineListSlice';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { WineIcon, ChampagneIcon, DownIcon } from '../../components/icons';
import { Button, SideMenu, WineCard } from '../../components';
import classNames from 'classnames';
import '../../styles/grid.scss';
import styles from './Catalog.module.scss';
import { useFilterCategory } from '../../hooks';

export const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items: wines } = useAppSelector((state) => state.activeWineList);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { categories, handleOnChange } = useFilterCategory();

  useEffect(() => {
    const skip = searchParams.get('skip');

    const query = skip ? `${pathname}?skip=${skip}` : pathname;
    dispatch(wineActions.initActiveWineList(query));
  }, [dispatch, pathname, searchParams]);

  const handleShowMore = (): void => {
    const skip = searchParams.get('skip') || '0';

    setSearchParams({ skip: `${+skip + 9}` });
  };

  const handleTopFilter = (point: string): void => {
    setSearchParams({});
    navigate(point);
  };

  return (
    <div className={styles.catalog}>
      <div className="grid">
        <div className="grid__item grid__item--desktop-1-3">
          <SideMenu
            handleOnChange={handleOnChange}
            selectedCategories={categories}
          />
        </div>

        <div className="grid__item grid__item--desktop-4-12">
          <div className={styles.catalogWineFilter}>
            <Button
              className={classNames(
                styles.wineFilterBtn,
                styles.wineFilterBtnBorder,
                { [styles.wineFilterBtnActive]: pathname === '/catalog' }
              )}
              onClick={() => handleTopFilter('/catalog')}
            >
              <ChampagneIcon />
              <div
                className={classNames(styles.wineFilterText, {
                  [styles.wineFilterTextActive]: pathname === '/catalog',
                })}
              >
                Все
              </div>
              <WineIcon />
            </Button>

            <div className={styles.wineFilterBtnGroup}>
              <Button
                className={classNames(styles.wineFilterBtn, {
                  [styles.wineFilterBtnActive]: pathname === '/champagne',
                })}
                onClick={() => handleTopFilter('/champagne')}
              >
                <ChampagneIcon />
                <div
                  className={classNames(styles.wineFilterText, {
                    [styles.wineFilterTextActive]: pathname === '/champagne',
                  })}
                >
                  Шампанське та ігристе
                </div>
              </Button>

              <Button
                className={classNames(styles.wineFilterBtn, {
                  [styles.wineFilterBtnActive]: pathname === '/wine',
                })}
                onClick={() => handleTopFilter('/wine')}
              >
                <div
                  className={classNames(styles.wineFilterText, {
                    [styles.wineFilterTextActive]: pathname === '/wine',
                  })}
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
              {wines.map((wine) => (
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
