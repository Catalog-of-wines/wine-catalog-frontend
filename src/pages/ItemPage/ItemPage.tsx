import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
  ItemPurchase,
  Loader
} from '../../components';

import styles from './ItemPage.module.scss';

type Props = {
  handleSignIn: () => void,
}

export const ItemPage = React.memo<Props>(({ handleSignIn }) => {
  const dispatch = useAppDispatch();
  const { wineId = '0' } = useParams();
  const { item: wine, loaded } = useAppSelector((state) => state.selectedWine);
  const [comments, setComments] = useState<OneComment[]>([]);
  const [isCommentPosting, setIsCommentPosting] = useState(false);

  const getAllComments = useCallback(async () => {
    try {
      const data = await getComments(wineId);

      setComments(data.reverse());
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

      {!loaded && <Loader className={styles.loader} />}

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
              <ItemInfo wine={wine} comments={comments} />
              <div className={styles.grid}>
                <div className={styles.itemPurchaseGrid}>
                  <ItemPurchase priceData={price} />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.grid}>
            <div className={styles.imageGrid}>
              <Comments comments={comments} isCommentPosting={isCommentPosting} />
            </div>
            <div className={styles.itemInfoGrid}>
              <CreateCommentForm
                comments={comments}
                setComments={setComments}
                handleSignIn={handleSignIn}
                setIsCommentPosting={setIsCommentPosting}
              />
            </div>
          </div>
        </>
      }
    </div>
  );
});
