import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as selectedWineActions from '../../features/selectedWine/selectedWineSlice';
import { ItemHead, ItemInfo, ItemPurchase } from '../../components';
import styles from './ItemPage.module.scss';

export const ItemPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { wineId = '0' } = useParams();
  const { item: wine, loaded } = useAppSelector((state) => state.selectedWine);

  useEffect(() => {
    dispatch(selectedWineActions.initSelectedWine(wineId));
  }, [dispatch, wineId]);

  if (!wine) {
    return null;
  }

  const { name, price, image_url } = wine;

  return (
    <div className={styles.itemPage}>
      <div className={styles.grid}>
        <div className={styles.itemHeadGrid}>
          <ItemHead />
        </div>
      </div>

      {!loaded &&
        <div className={classNames('loader', styles.loader)}></div>
      }

      {loaded &&
        <div className={styles.grid}>
          <div className={styles.imageGrid}>
            <img
              src={image_url}
              alt={name}
              className={styles.image}
            />
          </div>
          <div className={styles.itemInfoGrid}>
            <ItemInfo wine={wine} />
            <div className={styles.grid}>
              <div className={styles.itemPurchaseGrid}>
                <ItemPurchase priceData={price} />
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};
