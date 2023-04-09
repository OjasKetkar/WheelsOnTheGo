import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllCars } from "../redux/actions/carsActions";
import "../styles/cars.css"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"


export default function CarsInfo(props){
    
      return (
        <>
        <Header/>
         <h1>Car info</h1>

        <div className="main">
            
                
                    <div className="container">
                        <div className="car-name">
                           
                        </div>
                    </div>
                
            
        </div>

          
        <Footer/>
        </>
      )
}