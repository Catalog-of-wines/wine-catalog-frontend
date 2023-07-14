import React from 'react';
import { SetURLSearchParams, useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import { Button } from '../../components';
import { ChampagneIcon, WineIcon } from '../icons';

import styles from './ButtonGroup.module.scss';

type Props = {
  setSearchParams: SetURLSearchParams;
};

export const ButtonGroup = React.memo<Props>(() => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleTopFilter = (point: string): void => {
    navigate(point);
  };

  return (
    <div className={styles.catalogWineFilter}>
      <Button
        className={classNames(
          styles.wineFilterBtn,
          styles.wineFilterBtnBorder,
          { [styles.wineFilterBtnActive]: pathname === '/catalog/' }
        )}
        onClick={() => handleTopFilter('/catalog/')}
      >
        <ChampagneIcon />
        <div
          className={classNames(
            styles.wineFilterText,
            { [styles.wineFilterTextActive]: pathname === '/catalog/' }
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
            { [styles.wineFilterBtnActive]: pathname === '/champagne/' }
          )}
          onClick={() => handleTopFilter('/champagne/')}
        >
          <ChampagneIcon />
          <div
            className={classNames(
              styles.wineFilterText,
              { [styles.wineFilterTextActive]: pathname === '/champagne/' }
            )}
          >
            Шампанське та ігристе
          </div>
        </Button>

        <Button
          className={classNames(
            styles.wineFilterBtn,
            { [styles.wineFilterBtnActive]: pathname === '/wine/' }
          )}
          onClick={() => handleTopFilter('/wine/')}
        >
          <div
            className={classNames(
              styles.wineFilterText,
              { [styles.wineFilterTextActive]: pathname === '/wine/' }
            )}
          >
            Вино
          </div>
          <WineIcon />
        </Button>
      </div>
    </div>
  )
})