import React from "react";
import { Image } from "../../../Image";

import styles from './CommentItem.module.scss';
import userPhoto from '../../../../images/user_photo.png'
import { HeartIcon, StarIcon } from "../../../icons";

type Props = {
  text: string;
}

export const CommentItem = React.memo<Props>(({ text }) => {
  return (
    <div>
      <div className={styles.titleGroup}>
        <Image
          src={userPhoto}
          alt="userPhoto"
          className={styles.image}
        />
        <h4 className={styles.userName}>Anonymous</h4>
        <StarIcon className={styles.star} />
        <span className={styles.rate} >4</span>
      </div>

      <p className={styles.text}>{text}</p>

      <div className={styles.dateGroup}>
        <p className={styles.date}>08.06.2023</p>
        <HeartIcon className={styles.heart} />
      </div>
    </div>
  )
})