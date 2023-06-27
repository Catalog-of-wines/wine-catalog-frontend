import { FC } from 'react';
import styles from './Checkbox.module.scss';

export interface CheckboxProps {
  id: string;
  disabled?: boolean;
  checked?: boolean;
  label?: string;
  name: string;
  onChange: (value: string, name: string) => void;
}

export const Checkbox: FC<CheckboxProps> = ({
  id,
  label,
  disabled,
  checked,
  name,
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
      onChange={() => onChange(id, name)}
    />
    <div className={styles.custom} />
    <span className={styles.label}>{label}</span>
  </label>
);
