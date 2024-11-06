import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <>
    <div className='contact'>
            <h1>Contact Us</h1>
            <h3>welcome to contact us page</h3>
    </div>
    <div className='contact-down'>
      <h3>Contact Us</h3>
      <h1>Please Feel Free To <br /> Contact Us</h1>
    </div>
    <div className='contact-down-form'>
      <form action="">
        <input type="text" placeholder='Enter Your Name' />
        <input type="email" placeholder='Enter Your Email' />
        <input type="text" placeholder='Enter Your Phone Number' />
        <textarea name="" id="" cols="30" rows="10" placeholder='Enter Your Message'></textarea>
        <button>Submit</button>
      </form>
      <div className='contact-down-inside'>
        <div>
          <h2>Address</h2>
          <p>123, Lorem Ipsum, Dolor Sit, Amet, 12345</p>
        </div>
        <div>
          <h2>Phone</h2>
          <p>+1234567890</p>
          </div>
          <div>
            <h2>Email</h2>
            <p>SafeCam@gmail.com</p>
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
