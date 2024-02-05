import React, { useEffect, useState } from 'react'
import Item from '../ProductsList/Item'
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Orders from '../Orders/Orders';
import CartDetailsTest from '../CartDetails/CartDetailsTest';

function CartPage ({ items, onAddOne, onRemoveOne, totalBill }) {

  const [bill, setBill] = useState(0);
  const [cart, setCart] = useState([]);
  const [countItem, setCountItem] = useState(0);

  useEffect(() => {
    setCart(items);
    setBill(totalBill);
  }, [])

  const addToCart = item => { 
    item.count += 1; 
    let index = cart.findIndex(i => i.id === item.id);
    console.log('index founderad', index)
    console.log('countis?', item.count)
    setBill(bill + item.price);    
    setCart(prevCart => [...prevCart, item]);
  };
  
  const removeItem = item => {
    let index = cart.findIndex(i => i.id === item.id);
    console.log('index founder', index)
    if (index >= 0) {   
      console.log('index found', cart)
      item.count -= 1;
      setCountItem(countItem - 1);   
      setBill(bill - item.price);
      setCart(cart => {
        const copy = [...cart];
        copy.splice(index, 1);
        return copy;
      })
    }
  }
  
  return (

    <ul className="CartPage-items">
      {console.log('items are', cart)}
      {items.map(((item, index) =>
        <li key={index} className="CartPage-item">
          <Item item={item}>
            <div className="CartItem-controls">
              <button
                className="CartItem-removeOne"
                onClick={() => removeItem(item)}>&ndash;
              </button>
              <span className="CartItem-count">{item.count}</span>
              <button
                className="CartItem-addOne"
                onClick={() => addToCart(item)} >+
              </button>
            </div>
          </Item>
        </li>
      ))}
      <Row> &nbsp;</Row>
      {bill > 0 ? <b>Total bill: {bill}</b> : <b>Your cart is empty!<br />Add your favorite products from the list!</b>}
      {console.log('cartcart', cart)}
      <div>
        {bill > 0 && <CartDetailsTest cart={cart} bill={bill} /> }
      </div>

    </ul>

  )
}
export default CartPage