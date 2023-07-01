import { FC } from 'react';
import styles from './Radio.module.scss';
import { OnChange } from '../../types/events';

export interface RadioProps {
  id: string;
  disabled?: boolean;
  checked?: boolean;
  label?: string;
  name: string;
  categoryName?: string;
  onChange: (e: OnChange) => void;
}

export const Radio: FC<RadioProps> = ({
  id,
  label,
  disabled,
  checked,
  name,
  categoryName,
  onChange,
}) => (
  <label className={styles.radio}>
    <input
      id={id}
      name={name}
      type="radio"
      value={id}
      className={styles.real}
      disabled={disabled}
      checked={checked}
      onChange={onChange}
      data-category={categoryName}
    />
    <div className={styles.custom} />
    <span className={styles.label}>{label}</span>
  </label>
);
