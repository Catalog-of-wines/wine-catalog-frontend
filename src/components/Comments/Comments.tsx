import React, { useEffect, useState } from "react";
import { OneComment } from '../../types/OneComment';
import { ChatIcon } from "../icons";
import { CommentItem } from "./components/CommentItem";
import { Button, SmallPageTitle } from "../../components";
import styles from './Comments.module.scss';

type Props = {
  comments: OneComment[],
}

export const Comments = React.memo<Props>(({ comments }) => {
  const [commentsToShow, setCommentsToShow] = useState<OneComment[]>([]);

  console.log(commentsToShow);
  

  const handleClick = () => {
    setCommentsToShow(comments);
  }

  useEffect(() => {
    setCommentsToShow(comments.slice(0, 2));
  }, [comments]);

  return (
    <>
      <div className={styles.titleGroup}>
        {comments.length > 0 && <ChatIcon />}
        <SmallPageTitle className={styles.title}>
          {comments.length ? 'Відгуки' : 'Покищо немає відгуків'}
        </SmallPageTitle>
      </div>

      {comments.length > 0 &&
        <div className={styles.commentsList}>
          {commentsToShow.map(comment =>
            <CommentItem comment={comment} key={comment._id} />
          )}
        </div>
      }

      {comments.length > commentsToShow.length &&
        <Button onClick={handleClick} className={styles.button}>
          <p className={styles.showMoreBtnText}>Показати більше</p>
        </Button>
      }
    </>
  )
})
