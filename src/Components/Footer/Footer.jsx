import React from 'react';
import './Footer.css';
export default function Footer (){
  const year = new Date().getFullYear()
  return (
    <div className='footer'>
      <div className='main-footer'>
      <div className='left-footer'><h3>One store</h3></div>
      
        <nav>
            <ul class="footer-nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
        </nav>
    

     <div className='right-footer'><p>Copyright <span>{year}</span></p></div>
      </div>
    
      
    </div>
  );
}


