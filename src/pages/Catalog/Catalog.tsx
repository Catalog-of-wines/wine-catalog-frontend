import { useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Button, ButtonGroup, SideMenu, WineList } from '../../components';

import * as wineActions from '../../features/activeWineList/activeWineListSlice';

import styles from './Catalog.module.scss';
import '../../styles/grid.scss';
import { useFilterCategory } from '../../hooks';

export const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items: wines } = useAppSelector((state) => state.activeWineList);
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();
  const { categories, handleOnChange } = useFilterCategory();


//   "на свято" /festive/
// "на вечір" /romantic/

  const navigate = useNavigate();

  useEffect(() => {
    let fullQuery = pathname;
    const skip = searchParams.get('skip');
    const query = searchParams.get('query');

    if (skip && query) {
      fullQuery += `?skip=${skip}&query=${query}`
    } else if (skip) {
      fullQuery += `?skip=${skip}`;
    } else if (query) {
      fullQuery += `?query=${query}`;
    }

    dispatch(wineActions.initActiveWineList(fullQuery));
  }, [dispatch, pathname, searchParams]);

  const handleShowMore = (): void => {
    const skip = searchParams.get('skip') || '0';

    setSearchParams({ skip: `${+skip + 9}` });
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
              <WineList wines={wines} />
            </div>
          </div>
        </div>

        {/* temporary button */}
        <Button onClick={() => navigate('/favorites')}><p className={styles.showMoreBtnText}>to favorites</p></Button>

        <div className="grid__item grid__item--desktop-7-9">
          <Button className={styles.showMoreBtn} onClick={handleShowMore}>
            <p className={styles.showMoreBtnText}>Показати більше</p>
          </Button>
        </div>
      </div>
    </div>
  );
};
