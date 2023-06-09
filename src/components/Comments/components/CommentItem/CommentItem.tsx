import React, { useCallback, useEffect, useState } from "react";
import { Image } from "../../../Image";

import styles from './CommentItem.module.scss';
import userPhoto from '../../../../images/user_photo.png'
import { HeartIcon, StarIcon } from "../../../icons";
import { OneComment } from "../../../../types/OneComment";
import { User } from "../../../../types/User";
import { getOneUser } from "../../../../api/user";

type Props = {
  comment: OneComment;
}

export const CommentItem = React.memo<Props>(({ comment }) => {
  const [user, setUser] = useState<User>();
  const { text, rating, user_id } = comment;

  const getUserName = useCallback(async () => {
    try {
      const data = await getOneUser(user_id);

      setUser(data);
    } catch (error) {
      console.log(error);
    }
  }, [user_id]);

  useEffect(() => {
    getUserName();
  }, [getUserName]);

  return (
    <div>
      <div className={styles.titleGroup}>
        <Image
          src={userPhoto}
          alt="userPhoto"
          className={styles.image}
        />
        <h4 className={styles.userName}>{user?.name ||'Anonymous'}</h4>
        <StarIcon className={styles.star} />
        <span className={styles.rate} >{rating > 0 && rating}</span>
      </div>

      <p className={styles.text}>{text}</p>

      <div className={styles.dateGroup}>
        <p className={styles.date}>08.06.2023</p>
        <HeartIcon className={styles.heart} />
      </div>
    </div>
  )
})