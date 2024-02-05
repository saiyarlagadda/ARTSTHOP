import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import sample from "../assets/images/images/ash-hayes-UzfYnsy_FxQ-unsplash.jpg";
import sample1 from "../assets/images/images/ash-hayes-UzfYnsy_FxQ-unsplash.jpg";
import sample2 from "../assets/images/images/birmingham-museums-trust-9dnNnTrHxmI-unsplash.jpg";
import sample3 from "../assets/images/images/birmingham-museums-trust-nbneQlI2M1A-unsplash.jpg";
import sample4 from "../assets/images/images/birmingham-museums-trust-sJr8LDyEf7k-unsplash.jpg";
import sample5 from "../assets/images/images/europeana-TjegK_z-0j8-unsplash.jpg";
import sample6 from "../assets/images/images/europeana-6c43FgRt0Dw-unsplash.jpg";

import Card from 'react-bootstrap/Card';
//import Col from 'react-bootstrap/Col';
//import Row from 'react-bootstrap/Row';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import { items } from "../ProductsList/static-data";
import ItemPage from "../ProductsList/ItemPage";
import CartPage from "../ProductsList/CartPage";

import Navigation from "../ProductsList/Navigation";

import '../ProductsList/ProductList.css'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

const styles = {
  quote: {
    width: "100px",


  }
}
const ProductsList = () => {
  const navigate = useNavigate();


  const Content = ({ tab, onAddToCart, onRemoveItem, cart }) => {
    switch (tab) {
      default:
      case "items":
        return <ItemPage items={items} onAddToCart={addToCart} />;
      case "cart":
        return (
          <CartPage
            items={cart}
            onAddOne={onAddToCart}
            onRemoveOne={onRemoveItem}
            totalBill={totalBill}
          />
        );
    }
  };

  const [activeTab, setActiveTab] = useState("items");
  const [cart, setCart] = useState([]);

  const [totalBill, setTotalBill] = useState(0);

  const addToCart = item => {
    alert('Product added to cart!');
    item.count += 1;
    setTotalBill(totalBill + item.price);
    setCart(prevCart => [...prevCart, item]);
  };

  const removeItem = item => {
    let index = cart.findIndex(i => i.id === item.id);
    if (index >= 0) {
      item.count -= 1;
      setTotalBill(totalBill - item.price);
      setCart(cart => {
        const copy = [...cart];
        copy.splice(index, 1);
        return copy;
      })
    }
  }

  const summarizeCart = cart => {
    const groupItems = cart.reduce((summary, item) => {
      summary[item.id] = summary[item.id] || {
        ...item,
        count: 0
      };
      summary[item.id].count++;
      return summary;
    }, {});
    return Object.values(groupItems);
  };

  return (
    <>
      <div className="prod-list">
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="app-content">
          <Content
            tab={activeTab}
            onAddToCart={addToCart}
            cart={summarizeCart(cart)}
            onRemoveItem={removeItem}
          />
        </main>

      </div>
    </>
  )
}

export default ProductsList