import React from 'react'
import './About.css'
import aboutimage from '../assets/image_3.jpg'
import image_5 from '../assets/image_5.png'
import image_6 from '../assets/image_6.png'
import image_15 from '../assets/image_15.jpg'
import image_16 from '../assets/image_16.jpg'
import image_17 from '../assets/image_17.jpg'
import image_18 from '../assets/image_18.jpg'

export const About = () => {
  return (
    <>  
        <div className='about'>
            <h1>ABOUT US</h1>
            <h3>welcome to about us page</h3>
        </div>
 
  <div className='about-page'>
    <div className='about-page-image'>
        <img src={aboutimage} alt="" />
    </div>
    <div className='about-page-upper'> 
        <div className='about-page-upper-inside fade-in' id="text">
            <h2>ABOUT US</h2>
            <h1>We Offers Quality CCTV <br /> Systems & Services</h1>
            <h3> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quia tenetur vero nam mollitia minus harum ipsum iure velit omnis tempore</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Esse corporis sit, officiis mollitia eum at id officia 
                minima quaerat debitis quis velit maiores harum dolorum facere 
                cupiditate nesciunt numquam omnis, obcaecati pariatur nisi animi 
                aspernatur itaque! Dolorem nihil cupiditate iste laborum quas 
                dolor corporis inventore quasi autem? At, quasi iure.</p>
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
