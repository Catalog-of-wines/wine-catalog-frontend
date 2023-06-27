import { FC } from 'react';
import styles from './Radio.module.scss';

export interface RadioProps {
  id: string;
  disabled?: boolean;
  checked?: boolean;
  label?: string;
  name: string;
  onChange: (value: string, name: string) => void;
}

export const Radio: FC<RadioProps> = ({
  id,
  label,
  disabled,
  checked,
  name,
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
      onChange={() => onChange(id, name)}
    />
    <div className={styles.custom} />
    <span className={styles.label}>{label}</span>
  </label>
);
