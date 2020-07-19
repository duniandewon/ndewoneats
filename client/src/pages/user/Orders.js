import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';

/** auth actions */
import { loadUser, setLoading } from '../../redux/actions/authActions';

/** Order actions */
import { getOrders } from '../../redux/actions/orderActions';

/** Components */
import MiniCartItem from '../../components/MiniCartItem';

const Orders = (props) => {
  const { setLoading, loadUser, loading, getOrders, orders } = props;

  useEffect(() => {
    setLoading();
    loadUser();
    getOrders();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <h1 className='loading'>Loading...</h1>;
  }

  return (
    <div className='orders-list'>
      {orders.map((order) => (
        <div className='card order' key={order._id}>
          <div className='order__header'>
            <h3 className='order__date'>
              Date:{' '}
              <span>
                <Moment date={order.date} format='YYYY/MM/DD' />
              </span>
            </h3>
            <h3 className='order__address'>
              Address: <span>{order.shippingAddress}</span>
            </h3>
          </div>
          <div className='order__items'>
            {order.items.map((item) => (
              <MiniCartItem key={item._id} item={item} withImage />
            ))}
          </div>
          <div className='order__footer'>
            <h2 className='order__total'>
              Total: Rp. <span>{order.total}</span>
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  orders: state.orders.items,
});

export default connect(mapStateToProps, { setLoading, loadUser, getOrders })(
  Orders
);
