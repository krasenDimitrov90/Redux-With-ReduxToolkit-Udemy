import React from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import Notification from './components/UI/Notification';
import { sendCartData } from './store/cart';

let isInitial = true;

function App() {

  const dispatch = useDispatch();
  const notification = useSelector(state => state.ui.notification);
  const cartIsOpen = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const items = cart.items

  React.useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(items));
    
  }, [items, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartIsOpen && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
