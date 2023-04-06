import classes from './CartItem.module.css';
import { cartActions } from '../../store/cart';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(cartActions.addItem({ title }));
  };

  const handleDecrement = () => {
    dispatch(cartActions.decrementQty({ title }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecrement} >-</button>
          <button onClick={handleIncrement} >+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
