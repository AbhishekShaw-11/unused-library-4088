import React from 'react'
import {Routes,Route} from "react-router-dom";
import SingInUp from '../Components/SingInUp';
import Products from '../Components/Products';
import Home from '../Components/Home';
import Login from '../Components/Login';
import About from '../Components/About';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route to="/" path={<Home/>}>Home</Route>
        <Route to="/about" path={<About/>}>Home</Route>
        <Route to="/login" path={<Login/>}>Login</Route>
        <Route to="/singIn" path={<SingInUp/>}>SingInUp</Route>
        <Route to="/product" path={<Products/>}>Home</Route>

      </Routes>
    </div>
  )
}

export default AllRoutes
