import { FC } from 'react';
import styles from './Checkbox.module.scss';
import { OnChange } from '../../types/events';

export interface CheckboxProps {
  id: string;
  disabled?: boolean;
  checked?: boolean;
  label?: string;
  name: string;
  categoryName: string;
  onChange: (e: OnChange) => void;
}

export const Checkbox: FC<CheckboxProps> = ({
  id,
  label,
  disabled,
  checked,
  name,
  categoryName,
  onChange,
}) => (
  <label className={styles.checkbox}>
    <input
      id={id}
      name={name}
      type="checkbox"
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
