import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { createComment } from "../../api/commets";
import { StarIcon } from "../icons";
import { OneComment } from "../../types/OneComment";
import styles from './CreateCommentForm.module.scss';

type Props = {
  setComments: (comments: OneComment[]) => void,
  comments: OneComment[],
}

export const CreateCommentForm = React.memo<Props>(({setComments, comments}) => {
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState(0);
  const { wineId = '0' } = useParams();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!comment) {
      return;
    }

    const newComment: OneComment = {
      text: comment,
      wine_id: wineId,
      user_id: "649c24c5adb84c19dd647271"
    }

    createComment(newComment);
    setComment('');
    setComments([...comments, newComment])
  }

  const handleStarClick = (rate: number) => {
    setRate(rate);
  }

  return (
    <>
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
            onClick={() => navigate('/authorization')}
          > Увійти</span>
        </p>

        <div className={styles.rateBtnGroup}>
          <div className={styles.rateGroup}>
            <span className={styles.rateText}>Оцінка</span>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} onClick={() => handleStarClick(star)}>
                  <StarIcon
                    className={styles.star}
                    fill={star <= rate ? 'white' : '#B5B2B4'} />
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
    </>
  )
})
