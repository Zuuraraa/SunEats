import React from 'react';
import { assets } from '../../assets/assets';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className='contact-us' >
      <div className="content-contact">

        <div className="left-contact">
          <img src={assets.logo_whitebg} alt="" className='logo-contact' />
          <p>SunEats is your go-to destination for delicious and wholesome meals that brighten your day. With fresh ingredients and mouthwatering flavors, we bring you food that not only satisfies but also uplifts. Taste the sunshine in every bite!</p>
        </div>

        <div className="right-contact">
          <h1>Contact</h1>
          <ul className='contact-list'>
            <li onClick={() => window.location.href = "https://wa.me/6281234567890"}>
            <img src={assets.whatsapp} alt="WhatsApp" />
            <span>Kontak Admin</span>
            </li>

            <li onClick={() => window.location.href = "mailto:dummy@example.com"}>
              <img src={assets.mail} alt="" />
              <span>Email</span>
            </li>
            
            <li onClick={() => window.location.href = "https://www.google.com/maps?q=Jakarta"}>
              <img src={assets.map} alt="" />
              <span>Lokasi</span>
            </li>
          </ul>

        </div>
      </div>

    </div>
 
  );
};

export default ContactUs;
  