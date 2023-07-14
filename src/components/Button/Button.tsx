import classNames from "classnames";
// import { DetailedHTMLProps } from "react";
import styles from './Button.module.scss';

interface Props {
  onClick: () => void;
  children: React.ReactNode | string;
  style?: 'outlined' | 'outlined-black' | 'primary';
  className?: string;
}

export const Button: React.FC<Props> = ({
  children,
  onClick,
  style = 'primary',
  className,
  ...props
}) => (
  <button
    className={classNames(
      styles.button,
      styles[style],
      className,
    )}
    type='button'
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);
