import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './Orders.css'

const Orders = () => {

  const [ordersData, setOrdersData] = useState();
  const [searchVal, setSearchVal] = useState();
  const [authUser, setAuthUser] = useState();

  useEffect(() => {
    setTimeout(() => {
      getOrders(JSON.parse(localStorage.getItem("user")).email);
    }, 50);
  }, [])

  const getOrders = async (search) => {
    console.log('searchvall??', search)
    try {
      const res = await axios.get(`http://localhost:3000/getorders/${search}`,
      );
      setOrdersData(res.data);
      // console.log(res.data[1].cart[0]['id'])

    } catch (e) {
      console.log(e);
    }
  };

  const DisplayCard = ({ order }) => {
    console.log('orderis', order)
    return (
      <div className="search-card">
        <h4 style={{ borderBottom: '1px solid black', padding: '1.5rem', fontWeight: 'bold' }}>Order summary </h4>
        <div style={{ paddingTop: '1.5rem', paddingLeft: '1.5rem', fontSize: '20px', fontWeight: 'bold' }}>Order ID #{order.orderId}</div>
        <div style={{ paddingTop: '0.5rem', paddingLeft: '1.5rem', fontSize: '16px', fontWeight: 'bold' }}>Total bill: ${order.bill}</div>
        {order.cart.map((cartItem) => {
          return (
            <div class="orders-text">
              <img className="order-image" src={cartItem['img1']} alt='order image' />
              <div class="order-text">
                {/* <h4><b>{order.firstName} {order.lastName}</b></h4> */}
                <p>{cartItem['title']}</p>
                <p>{cartItem['description']}</p>
                <p>${cartItem['price']}</p>
                <p style={{ color: 'green' }}>Shipping soon!</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="orders-container">
      {console.log('authusr??', authUser)},
      <h3>Orders</h3>
      <div className="search-form">
        <label>Please enter your email id</label>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="abc@example.com"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <Button onClick={() => getOrders(searchVal)} variant="dark">Search</Button>
        </Form>
      </div>
      {ordersData ? ordersData.map(img => (
        <DisplayCard order={img} />
      )) : ''}

    </div>
  )
}

export default Orders