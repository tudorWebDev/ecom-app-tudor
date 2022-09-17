import React from 'react'
import {FaShippingFast} from "react-icons/fa"
import {RiSecurePaymentFill} from "react-icons/ri"
import {AiOutlineSafetyCertificate} from "react-icons/ai"
import {MdSupportAgent} from "react-icons/md"
const Services = () => {
  return (
    
    <div className='services-container'>
        <div className='services'>
            <div className="service">
                <div className='service-icon'><FaShippingFast size={70}/></div>
                <h1>FREE SHIPPING</h1>
                <h3>Fast and Free Shipping Worldwide and track orders</h3>
            </div>
            <div className="service">
            <div className='service-icon'><MdSupportAgent size={70}/></div>
                <h1>SUPPORT 24/7</h1>
                <h3>If you got any questions contact us and we will be there</h3>
            </div>
            <div className="service">
            <div className='service-icon'><RiSecurePaymentFill size={70}/></div>
                <h1>SECURE PAY</h1>
                <h3>Instant Pay without the risk of hackers</h3>
            </div>
            <div className="service">
            <div className='service-icon'><AiOutlineSafetyCertificate size={70}/></div>
                <h1>SAFE WEBSITE</h1>
                <h3>Explore our products without the fear of data breaches</h3>
            </div>
        </div>
    </div>
  )
}

export default Services