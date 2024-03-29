import React, { useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import * as wineActions from '../../features/activeWineList/activeWineListSlice';
import * as commentsActions from '../../features/activeCommentsList/activeCommentsListSlice';
import { useFilterCategory } from '../../hooks';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { scrollToTop } from '../../utils/scrollToTop';
import {
  Button,
  ButtonGroup,
  Loader,
  SideMenu,
  SmallPageTitle,
  WineList
} from '../../components';

import styles from './Catalog.module.scss';

export const Catalog = React.memo(() => {
  const dispatch = useAppDispatch();
  const { items: wines, loaded } = useAppSelector((state) => state.activeWineList);
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname, search } = useLocation();
  const { type, category, categories, handleOnChange } = useFilterCategory();
  const navigate = useNavigate();

  const setUrl = () => {
    if (type === 'radio') {
      const category = categories.toString();

      navigate(`/${category}/`);
    }

    if (type === 'checkbox') {
      const params = categories.map(param => ` ${param}`).join(',').trim();

      if (params) {
        navigate(`/${category}/?query=${params}`);
      } else {
        navigate('/catalog/');
      }
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

  useEffect(() => {
    dispatch(commentsActions.initActiveCommentsList(wines.map(wine => wine.id)));
  }, [dispatch, wines])

  const handleShowMore = (): void => {
    const skip = searchParams.get('skip') || '0';
    const params = new URLSearchParams(searchParams);

    params.set('skip', `${+skip + 9}`)

    setSearchParams(params);
    scrollToTop();
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
            <div className={styles.wineCards}>
              <WineList wines={wines} />
            </div>
          }

          {loaded && wines.length === 0 &&
            <SmallPageTitle className={styles.text}>
              Немає вин, які відповідають даній категорії
            </SmallPageTitle>
          }

          {!loaded && <Loader className={styles.loader} />}
        </div>

        {wines.length > 0 &&
          <div className={styles.buttonGrid}>
            <Button className={styles.showMoreBtn} onClick={handleShowMore}>
              <p className={styles.showMoreBtnText}>Показати більше</p>
            </Button>
          </div>
        }
      </div>
    </div >
  );
});
