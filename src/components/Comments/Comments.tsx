import React, { useEffect, useState } from "react";
import { ChatIcon } from "../icons";
import { CommentItem } from "./components/CommentItem";
import { Button, Loader, SmallPageTitle } from "../../components";
import { OneComment } from '../../types/OneComment';
import styles from './Comments.module.scss';

type Props = {
  comments: OneComment[],
  isCommentPosting: boolean,
}

export const Comments = React.memo<Props>(({ comments, isCommentPosting }) => {
  const [commentsToShow, setCommentsToShow] = useState<OneComment[]>([]);

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

      {isCommentPosting &&
        <Loader className={styles.loader} />
      }

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
