import {useDispatch, useSelector} from 'react-redux';
import {uiActions} from "../../store/ui-slice";
import classes from './CartButton.module.css';

const CartButton = (props) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const toggleCartHandler = () =>{
        dispatch(uiActions.toggle())
    }

    // 컴포넌트에서 수량을 계산할것인가? / 리덕스에서 계산할거인가?
    const getCartCount = () =>{
        const reducer = (total, item) => total + Number(item.quantity)
        return cartItems.reduce(reducer, 0);
    }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{getCartCount()}</span>
    </button>
  );
};

export default CartButton;
