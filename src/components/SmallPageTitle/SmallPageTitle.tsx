import React from 'react';
import styles from './SmallPageTitle.module.scss';
import classNames from 'classnames';

type Props = {
  children: string,
  className?: string;
}

export const SmallPageTitle: React.FC<Props> = ({ children, className }) => (
  <h1 className={classNames([styles.title], className)}>
    {children}
  </h1>
);
