import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {
  Elements,
  CardElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Homepage from './Homepage/Homepage';

const stripe = loadStripe(
  "pk_test_51N0ADmDLWMw6C8TXbKyZJNSSrN4wZHMiCEMphk37e0HhcUDDTvDxsRSKAw0d13oDx8n7XEWjcrp4d8FKznvcOZhY00PHShOAVc"
);

const App = () => {
  return (
    <Elements stripe={ stripe }>
      <Homepage />
    </Elements>
  )
}

export default App