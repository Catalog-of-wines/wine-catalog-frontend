import { useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import classNames from 'classnames';
import * as wineActions from '../../features/activeWineList/activeWineListSlice';
import { useFilterCategory } from '../../hooks';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  Button,
  ButtonGroup,
  SideMenu,
  WineList
} from '../../components';

import styles from './Catalog.module.scss';

export const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items: wines, loaded } = useAppSelector((state) => state.activeWineList);
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname, search } = useLocation();
  const { type, category, categories, handleOnChange } = useFilterCategory();
  const navigate = useNavigate();

  const setUrl = () => {
    if (type === 'radio') {
      const category = categories.toString();

      navigate(`/${category}`);
    }

    if (type === 'checkbox') {
      const params = categories.map(param => ` ${param}`).join(',').trim();

      navigate(`/${category}?query=${params}`)
    }
  };

  useEffect(() => {
    setUrl();
  }, [categories]);

  useEffect(() => {
    let fullQuery = pathname;

    if (search) {
      fullQuery += search;
    }

    dispatch(wineActions.initActiveWineList(fullQuery));
  }, [dispatch, pathname, search]);

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
