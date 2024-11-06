import React from 'react'
import './Service.css'
import image_7 from '../assets/image_7.png'
import image_8 from '../assets/image_8.png'
import image_9 from '../assets/image_9.png'
import image_10 from '../assets/image_10.png'
import image_11 from '../assets/image_11.png'
import image_12 from '../assets/image_12.png'


export const Service = () => {
  return (
   <>
   <div className='service'>
            <h1>Service</h1>
            <h3>welcome to service page</h3>
    </div>
    <div className='service-page'>
 <div className='service-page-upper'>
    <h2>SERVICES</h2>
    <h1>Our Excellent CCTV <br /> Security Services</h1>

 </div>
 <div>
    <div className='service-page-down'>
        <div  className='service-page-down-inside'>
            <img src={image_7} alt="" />
            <h2><span>CCTV</span> <br /> Installation</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            <button>Read More</button>
        </div>
        <div className='service-page-down-inside'>
        <img src={image_8} alt="" />
            <h2><span>CCTV</span> <br />Configuration</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            <button>Read More</button>
        </div>
        <div className='service-page-down-inside'>
        <img src={image_9} alt="" />
            <h2><span>CCTV</span> <br /> Maintenance</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            <button>Read More</button>
        </div>

    </div>
    <div className='service-page-down'>
        <div className='service-page-down-inside'>
        <img src={image_10} alt="" />
            <h2><span>CCTV</span> <br /> Repair & Service</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            <button>Read More</button>

        </div>
        <div className='service-page-down-inside'>
        <img src={image_11} alt="" />
            <h2><span>CCTV</span> <br /> Monitoring</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            <button>Read More</button>

        </div>
        <div className='service-page-down-inside'>
        <img src={image_12} alt="" />
            <h2><span>CCTV</span> <br /> Access Control</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            <button>Read More</button>

        </div>

    </div>
 </div>
</div>
<div className='offer-page'>
    <div className='offer-page-inside'>
    <div className='offer-page-upper'>
           <h2>SPECIAL OFFER</h2>
           <h1>Save 50% On All Items <br /> Your First Order</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Voluptates est corporis minus ut laborum vel quidem, 
             possimus aperiam odio at voluptatem eveniet sint, 
             assumenda, ipsa error delectus. Neque, sed dolor!</p>
    </div>
    <div className='offer-page-down'>
        <button>Order Now</button>
        <button>Read More</button>
    </div>
    </div>
</div>
<footer className='footer-page'> 
        <div className='footer-inside'>
            <h1>SafeCam</h1>
            <p>SafeCam is a smart camera that can detect any kind of <br /> suspicious activity and alert you immediately. <br /> It is a perfect solution for your home security. <br /> It is easy to install and easy to use.</p>
        </div>
        <div className='footer-inside'>
            <h2>Quick Links</h2>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/Service">Service</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        <div className='footer-inside'>
            <h2>Services</h2>
            <ul>
                <li>CCTV Installation</li>
                <li>CCTV Configuration</li>
                <li>CCTV Maintenance</li>
            </ul>
        </div>
        <div className='footer-inside'>
            <h2>Follow Us</h2>
            <ul>
                <li><a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F">Facebook</a></li>
                <li><a href="https://x.com/?mx=2">Twitter</a></li>
                <li><a href="https://www.instagram.com/">Instagram</a></li>
                <li><a href="https://www.linkedin.com/login">Linkedin</a></li>
            </ul>
        </div>
        <div className='footer-inside'>
            <h2>Contact Us</h2>
            <ul>
                <li>Address: 123 Main Street, New York, NY 10001</li>
                <li>Phone: +1234567890</li>
                </ul>
                </div>
     </footer>

   </>
  )
}
