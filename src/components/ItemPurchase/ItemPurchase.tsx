import { FC, useState } from 'react';
import styles from './ItemPurchase.module.scss';
import { Button } from '../Button';
import { Minus, Plus } from '../icons';
import { OnClick } from '../../types/events';

interface Props {
  priceData: string;
}

export const ItemPurchase: FC<Props> = ({ priceData }) => {
  const [amount, setAmount] = useState(1);

  const price = Number(priceData.replace('грн', '').replaceAll(' ', ''));

  const handleAmount = (e: OnClick) => {
    const { symbol } = e.currentTarget.dataset;

    switch (symbol) {
      case '-':
        setAmount(prev => prev - 1);

        break;

      case '+':
        setAmount(prev => prev + 1);

        break;
      
      default:
        break;
    }
  };

  return (
    <div className={styles.wrap}>
      <span className={styles.price}>{price * amount} грн</span>
      <div className={styles.actions}>
        <div className={styles.amountBox}>
          <button
            disabled={amount === 1}
            data-symbol="-"
            className={styles.icon}
            onClick={handleAmount}
          >
            <Minus />
          </button>
          <span className={styles.amount}>{amount}</span>
          <button
            data-symbol="+"
            className={styles.icon}
            onClick={handleAmount}
          >
            <Plus />
          </button>
        </div>
        <Button className={styles.btn} onClick={() => {}}>
          Купити
        </Button>
      </div>
    </div>
  );
};
