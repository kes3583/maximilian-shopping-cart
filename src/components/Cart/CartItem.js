import classes from './CartItem.module.css';
import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {addItemToCart,removeItemFromCart} from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, quantity, price, countInStock } = props;
  const [showError, setShowError] = useState(false);

  const addToCartHandler = useCallback(()=>{
    if(countInStock <= quantity){
      setShowError(true);
    } else {
      dispatch(addItemToCart({id, price}));
    }
  },[dispatch, id, price, setShowError, countInStock, quantity])

  const removeFromCartHandler = useCallback(()=>{
    dispatch(removeItemFromCart(id));
  },[dispatch, id])

  const getCartTotalPrice= () => {
    return price * Number(quantity);
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          {getCartTotalPrice()}
          {/*${total?.toFixed(2)}{' '}*/}
          <span className={classes.itemprice}>(${price?.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCartHandler}>-</button>
          <button disabled={showError} onClick={addToCartHandler}>+</button>
        </div>
      </div>
      <div>
        {showError && <div>재고수량을 초과하였습니다. {quantity}개 이하로만 구매하실수 있습니다.</div>}
      </div>
    </li>
  );
};

export default CartItem;
