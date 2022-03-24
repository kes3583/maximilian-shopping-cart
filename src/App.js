import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from "react-redux";
import { DUMMY_PRODUCTS } from './store/cart-slice';

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <Layout>
        {showCart && <Cart /> }
      <Products items={DUMMY_PRODUCTS}/>
    </Layout>
  );
}

export default App;
