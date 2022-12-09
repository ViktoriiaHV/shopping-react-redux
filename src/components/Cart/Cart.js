import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <div className={classes.total}>
        <h3>Total Amount:{totalAmount}$</h3>
      </div>
    </Card>
  );
};

export default Cart;
