import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Confirmation.css'

const Confirmation = () => {

  const navigate = useNavigate();
  const params = useParams();

  const [ordersData, setOrdersData] = useState();

  useEffect(() => {
    getOrders(params.email);
  }, [])

  const getOrders = async (searchVal) => {
    console.log('searchvall??', searchVal)
    try {
      const res = await axios.get(`http://localhost:3000/getorders/${searchVal}`,
      );
      setOrdersData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const DisplayCard = ({ order }) => {
    return (
      <div className="orders-card search-card">
        <h2>Thank you!</h2>
        <p>Your order ID is: <span style={{ color: 'green' }}>#{order[0].orderId}</span></p>
        <p>You can track the status of your order from orders page.</p>
        <h4 style={{ borderBottom: '1px solid black' }}>Order summary</h4>
        {order[0].cart.map((cartItem) => {
          return (
            <div class="ordercard-text">
              <img className="ordercard-image" src={`${cartItem['img1']}`} alt='order image' />
              <div className="cardtext">
                <p>{cartItem['title']}</p>
                <p>{cartItem['description']}</p>
                <p>${cartItem['price']}</p>
              </div>
            </div>
          )
        })}
        <div className="card-buttons">
          <Button className="cardbutton" variant="dark" onClick={() => navigate('/orders')} >Orders</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="confirmation-container">
      {ordersData ? <DisplayCard order={ordersData} /> : ''}
    </div>
  )
}

export default Confirmation