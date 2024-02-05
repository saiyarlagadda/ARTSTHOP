import React, { useState, useEffect } from 'react'
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import GooglePay from './GooglePay';
import axios from 'axios';
import './CartDetails.css'

const CartDetailsTest = ( { cart, bill }) => {

    const navigate = useNavigate();
    const params = useParams();

    console.log('fromcart', cart, bill)

    console.log('paramsare', params);

    const [orderId, setOrderId] = useState();
    const [shippingName, setShippingName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [shippingStreet, setShippingStreet] = useState('');
    const [shippingCity, setShippingCity] = useState('');
    const [shippingPostalZipCode, setShippingPostalZipCode] = useState();

    useEffect(() => {
        let order = getOrderId(7000000, 8000000);
        setOrderId(order);
      }, [])
    
      const getOrderId = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    const submitButton = async () => {
        if (shippingName != '' && firstName != '' && lastName != '' && email != '' && shippingStreet != '' && shippingCity != '' && shippingPostalZipCode != '') {
            // alert("Thank you for placing your order " + shippingName);
            console.log("Thank you for placing your order " + shippingName)
            const response = await fetch('http://localhost:3000/submitorder', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ shippingName, firstName, lastName, email, shippingStreet, shippingCity, shippingPostalZipCode, cart, bill, orderId })
            }, navigate(`/seemore/${email}`));
        }
    }

    return (
        <>
            <form className="checkout__form">
                <div className="checkout-fields">
                    <div className="column">
                        <h4 className="checkout__subheading">Customer information</h4>
                        <label className="checkout__label" htmlFor="firstName">First name</label>
                        <input className="checkout__input" type="text" name="firstName" placeholder="Enter your first name" onChange={(e) => setFirstName(e.target.value)} required />

                        <label className="checkout__label" htmlFor="lastName">Last name</label>
                        <input className="checkout__input" type="text" name="lastName" placeholder="Enter your last name" onChange={(e) => setLastName(e.target.value)} required />

                        <label className="checkout__label" htmlFor="email">Email</label>
                        <input className="checkout__input" type="text" name="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required />

                        <label className="checkout__label" htmlFor="total">Total Amount</label>
                        <input className="checkout__input" defaultValue={bill}  type="text" name="total"   readonly={true} />

                    </div>


                    <div className="column">
                        <h4 className="checkout__subheading">Shipping details</h4>
                        <label className="checkout__label" htmlFor="shippingName">Full name</label>
                        <input className="checkout__input" type="text" name="shippingName" placeholder="Enter your full name" onChange={(e) => setShippingName(e.target.value)} required />

                        <label className="checkout__label" htmlFor="shippingStreet">Street address</label>
                        <input className="checkout__input" type="text" name="shippingStreet" placeholder="Enter your street address" onChange={(e) => setShippingStreet(e.target.value)} required />

                        <label className="checkout__label" htmlFor="shippingCity">City</label>
                        <input className="checkout__input" type="text" name="shippingCity" placeholder="Enter your city" onChange={(e) => setShippingCity(e.target.value)} required />

                        <label className="checkout__label" htmlFor="shippingPostalZipCode">Postal/Zip code</label>
                        <input className="checkout__input" type="text" name="shippingPostalZipCode" placeholder="Enter your postal/zip code" onChange={(e) => setShippingPostalZipCode(e.target.value)} required />
                    </div>
                </div>

                <div>
                    <Row>
                        <GooglePay />
                    </Row>
                    <Row>
                        <Button variant='dark' className="checkout__label" htmlFor="shippingCountry" type="submit" onClick={() => submitButton()}>Submit</Button>
                    </Row>
                </div>

            </form>
        </>
    )
}

export default CartDetailsTest