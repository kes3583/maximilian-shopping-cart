import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {addItemToCart} from '../../store/cart-slice'

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, price, description, countInStock} = props;

  const addToCartHandler = useCallback(()=>{
    dispatch(addItemToCart({id, price, title, countInStock}))
  },[dispatch, id, price, title, countInStock])

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
