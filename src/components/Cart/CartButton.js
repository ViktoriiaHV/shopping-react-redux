import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';


const CartButton = (props) => {


const dispatch = useDispatch();
const totalQuantity = useSelector((state) => state.cart.totalQuantity)

const cartButtonHandler = () => {
  dispatch(uiActions.toggleCart());
}

  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>View Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
