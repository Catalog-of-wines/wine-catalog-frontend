import React from 'react';
import styles from './SmallPageTitle.module.scss';

interface Props {
  children: string,
}

export const SmallPageTitle: React.FC<Props> = ({ children }) => (
  <h1 className={styles.title}>
    {children}
  </h1>
);