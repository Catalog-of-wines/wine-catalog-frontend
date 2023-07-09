import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import * as selectedWineActions from '../../features/selectedWine/selectedWineSlice';
import { getComments } from '../../api/commets';
import { OneComment } from '../../types/OneComment';
import {
  Comments,
  CreateCommentForm,
  Image,
  ItemHead,
  ItemInfo,
  ItemPurchase
} from '../../components';
import styles from './ItemPage.module.scss';

export const ItemPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { wineId = '0' } = useParams();
  const { item: wine, loaded } = useAppSelector((state) => state.selectedWine);
  const [comments, setComments] = useState<OneComment[]>([]);

  const getAllComments = useCallback(async () => {
    try {
      const data = await getComments(wineId);

      setComments(data);
    } catch (error) {
      console.log(error);
    }
  }, [wineId]);

  useEffect(() => {
    dispatch(selectedWineActions.initSelectedWine(wineId));
    getAllComments();
  }, [dispatch, getAllComments, wineId]);

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
        <>
          <div className={styles.grid}>
            <div className={styles.imageGrid}>
              <Image
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
          <div className={styles.grid}>
            <div className={styles.imageGrid}>
              <Comments comments={comments} />
            </div>
            <div className={styles.itemInfoGrid}>
              <CreateCommentForm comments={comments} setComments={setComments} />
            </div>
          </div>
        </>
      }
    </div>
  );
};
