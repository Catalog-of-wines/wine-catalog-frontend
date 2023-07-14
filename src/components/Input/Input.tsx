import { FC } from 'react';
import styles from './Input.module.scss';

interface Props {
  type?: string;
  label?: string;
  placeholder?: string;
  className?: string;
}

export const Input: FC<Props> = ({
  type = 'text',
  label,
  placeholder,
  className = '',
 }) => {
  return (
    <div className={`field ${className}`}>
      {label && (
        <label className={`label ${styles.label}`}>
          {label}
        </label>
      )}
      <div className="control">
        <input
          className={`input ${styles.input}`}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
