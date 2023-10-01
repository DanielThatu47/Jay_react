/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Home from './components/Home';
import Yourbookings from './components/Yourbookings.jsx';
import AboutUs from './components/AboutUs.jsx';
import Navbar from './Backup/Navbar';
import Booking from './components/Booking';
import Profile from './components/Profile';
import Logout from './components/Logout';
import {Routes, Route, Link,BrowserRouter as Router} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-147umiv5h85hvjw1.us.auth0.com"
    clientId="oaw16qito5Wwdez6xj3I1k7gHDaocjrc"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <BrowserRouter>  
  
    
  
  <Navbar/>
  

  <Routes>
  <Route path="/" element={<Home />}></Route>
<Route path="/Home" element={<Home />}></Route>
<Route path="/AboutUs" element={<AboutUs/>}></Route>
<Route path="/Yourbookings" element={<Yourbookings/>}></Route>
<Route path="/Booking" element={<Booking/>}></Route>
<Route path="/Profile" element={<Profile/>}></Route>
<Route path="/Logout" element={<Logout/>}></Route>
</Routes></BrowserRouter>
</Auth0Provider>

);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
