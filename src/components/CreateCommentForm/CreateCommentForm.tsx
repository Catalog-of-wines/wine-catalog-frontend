import React, { useState } from "react"
import { useParams } from "react-router-dom";
import { createComment } from "../../api/commets";
import { getCurrentDate } from "../../utils/getCurrentDate";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import * as authActions from "../../features/auth/authSlice";
import { StarIcon } from "../icons";
import { OneComment } from "../../types/OneComment";
import styles from './CreateCommentForm.module.scss';

type Props = {
  setComments: (comments: OneComment[]) => void,
  handleSignIn: () => void,
  comments: OneComment[],
  setIsCommentPosting: React.Dispatch<React.SetStateAction<boolean>>,
}

export const CreateCommentForm = React.memo<Props>(({
  setComments,
  handleSignIn,
  comments,
  setIsCommentPosting
}) => {
  const user = useAppSelector(state => state.auth);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const { wineId = '0' } = useParams();
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!comment.trim().length) {
      return;
    }

    if (!user) {
      handleSignIn();
      return;
    }

    const newComment: OneComment = {
      text: comment,
      wine_id: wineId,
      user_id: user.user_id,
      rating,
      date: getCurrentDate(),
    }

    try {
      setIsCommentPosting(true);
      const responce = await createComment(newComment, user.access_token);

      if (responce.statusText === 'OK') {
        setComment('');
        setComments([newComment, ...comments]);
      }
    } catch {
      dispatch(authActions.removeUser());
      handleSignIn();
    } finally {
      setIsCommentPosting(false);
    }
  }

  const handleStarClick = (rating: number) => {
    setRating(rating);
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)} className={styles.form}>
      <textarea
        className={styles.textarea}
        value={comment}
        onChange={(event) => handleChange(event)}
        placeholder="Поділіться своїми враженнями про покупку"
        required
      ></textarea>

      <p className={styles.caption}>
        Зареєструйтесь або увійдіть, щоб залишити відгук!
        <span
          className={styles.link}
          onClick={() => handleSignIn()}
        > Увійти</span>
      </p>

      <div className={styles.rateBtnGroup}>
        <div className={styles.rateGroup}>
          <span className={styles.rateText}>Оцінка</span>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <div key={star} onClick={() => handleStarClick(star)}>
                <StarIcon
                  className={star <= rating ? styles.choosenStar : styles.star}
                  fill={star <= rating ? 'white' : '#B5B2B4'} />
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className={styles.button}
          disabled={comment.length === 0}
        >
          <p className={styles.showMoreBtnText}>Надіслати</p>
        </button>
      </div>
    </form>
  )
})
