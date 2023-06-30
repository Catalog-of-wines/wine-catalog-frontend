import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as selectedWineActions from '../../features/selectedWine/selectedWineSlice';
import styles from './ItemPage.module.scss';
import { ItemHead, ItemInfo } from '../../components';
// import { ItemPurchase } from '../../components/ItemPurchase';

export const ItemPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { wineId = '0' } = useParams();
  const { item: wine } = useAppSelector((state) => state.selectedWine);

  useEffect(() => {
    dispatch(selectedWineActions.initSelectedWine(wineId));
  }, [dispatch, wineId]);

  if (!wine) {
    return null;
  }

  console.log('wineId>>>>>', wineId);
  console.log('selectedWine>>>>>', wine);

  // const { name, price } = wine;
  const { name } = wine;

  return (
    <div className={styles.itemPage}>
      <div className="grid">
        <div className="grid__item grid__item--desktop-2-12">
          <ItemHead />
        </div>
      </div>
      <div className="grid">
        <div className="grid__item grid__item--desktop-2-6">
          <img
            src="https://viva-italia.od.ua/image/catalog/vino%20krasnoe/pinocchio.jpg"
            alt={name}
            className={styles.image}
          />
        </div>
        <div className="grid__item grid__item--desktop-8-12">
          <ItemInfo wine={wine} />
          <div className="grid">
            <div className="grid__item grid__item--desktop-1-10">
              {/* <ItemPurchase priceData={price} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
