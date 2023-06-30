import { FC } from 'react';
import styles from './ItemInfoList.module.scss';

interface Props {
  term: string;
  definition: string;
}

export const ItemInfoList: FC<Props> = ({ term, definition = '-' }) => (
  <dl className={styles.list}>
    <dt className={styles.term}>{term}:</dt>
    <dd className={styles.definition}>{definition}</dd>
  </dl>
);
