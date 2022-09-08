import React, {useState, useEffect} from "react";
import Link from "next/link";
import {BsBagCheckFill} from 'react-icons/bs';
import {useStateContext} from '../context/StateContext';
import { runConfetti } from "../lib/utils";

const success = () => {
    const { setCartItems, setTotalPrice,setTotalQuantities}=useStateContext()
    useEffect(()=>{
        localStorage.clear()
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantities(0)
        runConfetti()
    },[])

  return (
  <div className="success-wrapper">
    <div className="success">
        <p className="icon"><BsBagCheckFill/>
        </p>
        <h2>Thank you for purchase!</h2>
        <p className="email-msg">Check your email inbox for the receipt</p>
        <p className="description">
            If you have any questions, please email us!
        </p>
        <a className="email" href="mailto:tudorbalexe@gmail.com">tudorbalexe@gmail.com</a>
        <Link href="/">
            <button type="button" width="300px" className="btn">
                Back to homepage
            </button>
        </Link>
    </div>
  </div>
  );
};

export default success;
