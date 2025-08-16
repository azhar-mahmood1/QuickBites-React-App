import React, { useContext, useEffect, useState } from 'react';
import './MyOrder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        url + '/api/order/userorders',
        {},
        { headers: { token } }
      );
      setData(response.data.data || []);
      console.log(response.data.data);
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    }
  };

  useEffect(() => {
    if (token) fetchOrders();
  }, [token]);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => (
          <div key={index} className="my-orders-order">
            <img src={assets.parcel_icon} alt="parcel icon" />
            <p>
              {Array.isArray(order.items)
                ? order.items.map((item, index) => {
                    const separator =
                      index === order.items.length - 1 ? '' : ', ';
                    return `${item.name} x ${item.quantity}${separator}`;
                  })
                : 'No items'}
            </p>
            <p>${order.amount}.00</p>
            <p>Items: {order.items?.length || 0}</p>
            <p>
              <span>&#x25cf;</span> <b>{order.status}</b>
            </p>
            <button onClick={fetchOrders}>Track Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
