import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import * as wineActions from '../../features/activeWineList/activeWineListSlice';
import * as commentsActions from '../../features/activeCommentsList/activeCommentsListSlice';

import { Button, Image, WineList } from "../../components";
import { ChampagneIcon, WineIcon } from "../../components/icons";

import wineHomePage from "../../images/img_wine_homepage.png";
import styles from "./HomePage.module.scss";

export const HomePage: React.FC = () => {
  const { items: wines } = useAppSelector((state) => state.activeWineList);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState<number>(0);

  const mooveRight = useCallback(() => {
    setStartIndex((current) => {
      if (current + 2 > wines.length - 2) {
        return 0;
      }
      return startIndex + 2;
    });
  }, [startIndex, wines.length]);

  useEffect(() => {
    dispatch(wineActions.initActiveWineList('/festive/'));
  }, [dispatch]);

  useEffect(() => {
    dispatch(commentsActions.initActiveCommentsList(wines.map(wine => wine.id)));
  }, [dispatch, wines]);

  useEffect(() => {
    const interval = setInterval(() => {
      mooveRight();
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [mooveRight]);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <Image
            src={wineHomePage}
            alt={"Bottle of wine"}
            className={styles.image}
          />
        </div>

        <div className={styles.text}>
          <div className={styles.textGroup}>
            <h1 className={styles.textTitle}>хочеш?</h1>
            <h1 className={styles.textSubTitle}>відкрий!</h1>

            <Button className={styles.button} onClick={() => navigate('/catalog/')}>
              <p className={styles.buttonText}>У каталог</p>
            </Button>
          </div>
        </div>

        <div className={styles.containerAboutUs}>
          <div className={styles.aboutUs}>
            <h1 className={styles.aboutUsTitle}>про нас</h1>
            <p className={styles.aboutUsTextMain}>
              WineBox – гіпермаркет вин, що пропонує широкий асортимент
              різноманітних видів вин та шампанських на будь-який випадок життя.
              Ми ваш персональний сомельє, що допоможе легко знайти напій на ваш смак.
            </p>
            <p className={styles.aboutUsSubText}>
              Не важливо шукаєте ви ігристе чи тихе, солодке чи сухе, на WineBox знайдеться все!
            </p>
          </div>
        </div>

        <div className={styles.wine}>
          <WineList wines={wines.slice(startIndex, startIndex + 2)} />
        </div>

        <div className={styles.choice}>
          <h1 className={styles.choiceText}>обирай</h1>
          <div className={styles.choiceButtonsContainer}>
            <Link to='/festive/' className={styles.choiceButtonChampagne}>
              <ChampagneIcon className={styles.icon} />
              <p className={styles.choiceSubText}>на свято</p>
            </Link>
            <Link to='/romantic/' className={styles.choiceButtonWine}>
              <WineIcon className={styles.icon} />
              <p className={styles.choiceSubText}>на вечір</p>
            </Link>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div >
  );
};
