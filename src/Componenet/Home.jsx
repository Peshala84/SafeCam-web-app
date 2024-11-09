import React from 'react'
import './Home.css'
import aboutimage from '../assets/image_3.jpg'
import image_5 from '../assets/image_5.png'
import image_6 from '../assets/image_6.png'
import image_7 from '../assets/image_7.png'
import image_8 from '../assets/image_8.png'
import image_9 from '../assets/image_9.png'
import image_10 from '../assets/image_10.png'
import image_11 from '../assets/image_11.png'
import image_12 from '../assets/image_12.png'
import image_15 from '../assets/image_15.jpg'
import image_16 from '../assets/image_16.jpg'
import image_17 from '../assets/image_17.jpg'
import image_18 from '../assets/image_18.jpg'


export const Home = () => {
  return (
    <>
    <div className='home-page'>
    <div className='home-page-left'>
        <h2>Best Security Services</h2>
        <h1>Safe & Secure Home For <br /> Your Family </h1>
        <p>SafeCam is a smart camera that can detect any kind of <br /> suspicious activity and alert you immediately. <br /> It is a perfect solution for your home security. <br /> It is easy to install and easy to use.</p>
        
    </div>   
 </div>


 <div className='about-page'>
    <div className='about-page-image'>

        <img src={aboutimage} alt="" />

    </div>
    <div className='about-page-upper'> 
        <div className='about-page-upper-inside fade-in' id="text">
            <h2>ABOUT US</h2>
            <h1>We Offers Quality CCTV <br /> Systems & Services</h1>
            <h4> With over 15 years of experience, we specialize in providing top-of-the-line CCTV systems and comprehensive security solutions tailored to meet the needs of businesses and homeowners alike.</h4>
            <p>Our award-winning services include consultation, installation, and maintenance of CCTV systems designed to deliver reliable surveillance, whether for a small office or a large industrial facility. Let us help you safeguard your space with advanced technology, proven expertise, and a focus on customer satisfaction.</p>
        </div>
        <div className='about-page-down'> 
            <div className='about-page-down-left fade-in' id="icons">
                <img src={image_5} alt="" />
                <h2>15 Years Experience</h2>
            </div>
            <div className='about-page-down-right fade-in' id="icons">
                <img src={image_6} alt="" />
                <h2>Award Winning</h2>
            </div>
        </div>
    </div>
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




<div className='pricing-page'>
    <div className='pricing-page-upper'>
        <h2>PRICING PLAN</h2>
         <h1>Pricing Plan For CCTV <br /> Security Services</h1>
    </div>

    <div className='pricing-page-down'>
        <div className='pricing-page-down-inside'>
            <div className='pricing-page-down-inside-upper'>
                <h2>Basic Plan</h2>
                <h1>Rs.20000</h1>
            </div>
            <div className='pricing-page-down-inside-down'>
               
                <h3>24/7 Video Monitoring</h3>
                <h3>Up to 4 Cameras</h3>
                <h3>Mobile App Access</h3>
                <h3>Basic Installation</h3>
                <h3>Standard Support</h3>
                <h3>Remote Viewing</h3>
                <h3>Data Storage: 1 Month</h3>
                <button>Order Now</button>
            </div>

        </div>
        <div className='pricing-page-down-inside'>
            <div className='pricing-page-down-inside-upper'>
                <h2>Standard Plan</h2>
                <h1>Rs.30000</h1>
            </div>
            <div  className='pricing-page-down-inside-down'>
                
                <h3>24/7 Video Monitoring</h3>
                <h3>Up to 8 Cameras</h3>
                <h3>Mobile App & Web Access</h3>
                <h3>Professional Installation</h3>
                <h3>Priority Support</h3>
                <h3>Remote Viewing</h3>
                <h3>Data Storage: 3 Months</h3>
                <button>Order Now</button>
            </div>

        </div>
        <div className='pricing-page-down-inside'>
            <div className='pricing-page-down-inside-upper'>
                <h2>Premium Plan</h2>
                <h1>Rs.50000</h1>
            </div>
            <div  className='pricing-page-down-inside-down'>
                
                <h3>24/7 Video Monitoring</h3>
                <h3>Up to 12 Cameras</h3>
                <h3>Mobile App & Web Access</h3>
                <h3>Professional Installation & Setup</h3>
                <h3>Premium Support</h3>
                <h3>Remote Viewing</h3>
                <h3>Data Storage: 6 Months</h3>
                <button>Order Now</button>
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



<div className='member-page'>
    <div className='member-page-inside'>
        <h2>TEAM MEMBERS</h2>
         <h1>Our Professional Team <br /> Members</h1>
    </div>
    <div className='member-page-down'>
        <div>
            <div className='member-page-down-inside'>
                <img src={image_15} alt="" />
            </div>
            <div className='member-page-down-lower'>
                <h2>John Doe</h2>
                <h3>Owner/Manager</h3>
            </div>

        </div>
        <div>
            <div className='member-page-down-inside'>
                <img src={image_16} alt="" />
            </div>
            <div className='member-page-down-lower'>
                <h2>John Doe</h2>
                <h3>Salesperson/Consultant</h3>
            </div>

        </div>
        <div>
            <div className='member-page-down-inside'>
                <img src={image_17} alt="" />
            </div>
            <div className='member-page-down-lower'>
                <h2>John Doe</h2>
                <h3>Technician</h3>
            </div>

        </div>
        <div>
            <div className='member-page-down-inside'>
                <img src={image_18} alt="" />
            </div>
            <div className='member-page-down-lower'>
                <h2>John Doe</h2>
                <h3>Marketing Manager</h3>
            </div>

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
