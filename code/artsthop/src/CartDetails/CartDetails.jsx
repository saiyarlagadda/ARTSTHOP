import React, { useState, useEffect, Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import '../ProductsList/ProductList.css'
import axios from 'axios';
import '../CartDetails/CartDetails.css'
import Modal from 'react-bootstrap/Modal';
import emailjs from 'emailjs-com';
import GooglePay from './GooglePay';
import { useNavigate, Route, Link, useParams, redirect } from 'react-router-dom';

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}



function sendEmail(e) {
  e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
  emailjs.sendForm('service_5xiwpza', 'template_74sqbfc', e.target, 'fe9d99CaY8RHhZSeFCzmW')
    .then((result) => {
      window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
    }, (error) => {
      console.log(error.text);
    });
}

class CartDetails extends Component {

  constructor(props) {
    super(props);
    this.submitButton = this.submitButton.bind(this);
    this.state = {
      billAmt: this.props.bill,
      checkoutToken: {},
      // Customer details
      firstName: '',
      lastName: '',
      email: '',
      // Shipping details
      shippingName: '',
      shippingStreet: '',
      shippingCity: '',
      shippingStateProvince: '',
      shippingPostalZipCode: '',
    }

    this.handleFormChanges = this.handleFormChanges.bind(this);
    this.handleShippingCountryChange = this.handleShippingCountryChange.bind(this);
  };

  componentDidMount() {
  };

  handleFormChanges(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleShippingCountryChange(e) {
    const currentValue = e.target.value;
    this.fetchSubdivisions(currentValue);
  };

  fetchSubdivisions(countryCode) {
    commerce.services.localeListSubdivisions(countryCode).then((subdivisions) => {
      this.setState({
        shippingSubdivisions: subdivisions.subdivisions,
      })
    }).catch((error) => {
      console.log('There was an error fetching the subdivisions', error);
    });

  };

  submitButton() {
    if (this.state.shippingName != '' && this.state.firstName != '' && this.state.lastName != '' && this.state.email != '' && this.state.shippingStreet != '' && this.state.shippingCity != '' && this.state.shippingPostalZipCode != '') {
      alert("Thank you for placing your order " + this.state.shippingName);
    }
  }

  renderCheckoutForm() {
    const { shippingCountries, shippingSubdivisions, shippingOptions } = this.state;
    return (
      <>
        <form className="checkout__form" onChange={this.handleFormChanges}>
          <div class="row">
            <div class="column">
              <h4 className="checkout__subheading">Customer information</h4>
              <label className="checkout__label" htmlFor="firstName">First name</label>
              <input className="checkout__input" type="text" onChange={this.handleFormChanges} value={this.state.firstName} name="firstName" placeholder="Enter your first name" required />

              <label className="checkout__label" htmlFor="lastName">Last name</label>
              <input className="checkout__input" type="text" onChange={this.handleFormChanges} value={this.state.lastName} name="lastName" placeholder="Enter your last name" required />

              <label className="checkout__label" htmlFor="email">Email</label>
              <input className="checkout__input" type="text" onChange={this.handleFormChanges} value={this.state.email} name="email" placeholder="Enter your email" required />

              <label className="checkout__label" htmlFor="total">Total Amount</label>
              <input className="checkout__input" type="text" value={this.props.params.bill} name="total" readonly={true} />

            </div>


            <div class="column">
              <h4 className="checkout__subheading">Shipping details</h4>
              <label className="checkout__label" htmlFor="shippingName">Full name</label>
              <input className="checkout__input" type="text" onChange={this.handleFormChanges} value={this.state.shippingName} name="shippingName" placeholder="Enter your full name" required />

              <label className="checkout__label" htmlFor="shippingStreet">Street address</label>
              <input className="checkout__input" type="text" onChange={this.handleFormChanges} value={this.state.shippingStreet} name="shippingStreet" placeholder="Enter your street address" required />

              <label className="checkout__label" htmlFor="shippingCity">City</label>
              <input className="checkout__input" type="text" onChange={this.handleFormChanges} value={this.state.shippingCity} name="shippingCity" placeholder="Enter your city" required />

              <label className="checkout__label" htmlFor="shippingPostalZipCode">Postal/Zip code</label>
              <input className="checkout__input" type="text" onChange={this.handleFormChanges} value={this.state.shippingPostalZipCode} name="shippingPostalZipCode" placeholder="Enter your postal/zip code" required />
            </div>
          </div>

          <div>
            <Row>
              <GooglePay />
            </Row>
            <Row>
              <Button variant='dark' className="checkout__label" htmlFor="shippingCountry" type="submit" onClick={this.submitButton}>Submit</Button>
            </Row>
          </div>

        </form>
      </>
    );
  };



  render() {
    return (
      <div className="checkout">
        <h2 className="checkout__heading">
          Checkout
        </h2>
        <div className="checkout__wrapper">
          {this.renderCheckoutForm()}
        </div>
      </div>
    );
  };
};

export default withParams(CartDetails);