import { useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Button, ButtonGroup, SideMenu, WineList } from '../../components';

import * as wineActions from '../../features/activeWineList/activeWineListSlice';

import styles from './Catalog.module.scss';
// import '../../styles/grid.scss';
import { useFilterCategory } from '../../hooks';
import classNames from 'classnames';

export const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items: wines, loaded } = useAppSelector((state) => state.activeWineList);
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();
  const { type, categories, handleOnChange } = useFilterCategory();
  const navigate = useNavigate();

  const setUrl = () => {
    if (type === 'radio') {
      const category = categories.toString();
      navigate(`/${category}`);
    }
  };

  useEffect(() => {
    setUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

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
      <div className={styles.grid}>
        <div className={styles.sideMenuGrid}>
          <SideMenu
            handleOnChange={handleOnChange}
            selectedCategories={categories}
          />
        </div>

        <div className={styles.contentGrid}>

          <ButtonGroup setSearchParams={setSearchParams} />

          {/* <div className={styles.catalogWineSort}>
            <div className={styles.wineSort}>
              <div className={styles.wineSortTitle}>Сортування:</div>
              <div className={styles.wineSortCategory}>Популярність</div>
              <DownIcon />
            </div>
          </div> */}

          {loaded &&
            < div className={styles.wineCards}>
              <WineList wines={wines} />
            </div>
          }

          {!loaded &&
            <div className={classNames('loader', styles.loader)}></div>
          }
        </div>

        <div className={styles.buttonGrid}>
          <Button className={styles.showMoreBtn} onClick={handleShowMore}>
            <p className={styles.showMoreBtnText}>Показати більше</p>
          </Button>
        </div>
      </div>
    </div >
  );
};
