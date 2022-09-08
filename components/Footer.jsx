import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 TWD Phones All rights reserved</p>
      <p className="icons">
        <AiFillInstagram  className='icon'/>
        <AiOutlineTwitter className='icon'/>
      </p>
    </div>
  )
}

export default Footer