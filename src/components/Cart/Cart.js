import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
          {cartItems.map((item, index)=>{
              return  <CartItem {...item} key={`item-${index}`}/>
          })}
      </ul>
    </Card>
  );
};

export default Cart;
