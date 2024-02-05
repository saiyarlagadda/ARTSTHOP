import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import ProductsList from './ProductsList/ProductsList';
import ViewProduct from './ViewProduct/ViewProduct';
import NavBar from './NavBar/NavBar';
import LoginPage from './LoginPage/loginPage'
import RegisterPage from'./RegisterPage/RegisterPage';
import Orders from './Orders/Orders';
import CartDetails from './CartDetails/CartDetails';
import Confirmation from './Confirmation/Confirmation';
import CartDetailsTest from './CartDetails/CartDetailsTest';
import CartPage from './ProductsList/CartPage';
import SeeMore from './LandingPage/SeeMore/SeeMore';
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<App />} />
        <Route path='/login' exact element={<LoginPage />} />
        <Route path='/register' exact element={<RegisterPage />} />
        <Route path='/products' exact element={<ProductsList />} />
        <Route path='/view/:id' exact element={<ViewProduct />} />
        <Route path='/orders' exact element={<Orders />} />
        <Route path='/cart' exact element={<CartPage />} />
        <Route path='/seemore/:email' exact element={<SeeMore />} />
        <Route path='/cartDetails/:bill'  element={<CartDetailsTest />} />
        <Route path='/confirmation/:email' exact element={<Confirmation />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
