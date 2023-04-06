import classes from './CartButton.module.css';
import { cartActions } from '../../store/cart';
import { useDispatch } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch();

  const onCartClickHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <button onClick={onCartClickHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
