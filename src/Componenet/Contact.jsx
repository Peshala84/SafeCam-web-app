import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <>
    <div className='contact'>
            <h1>Contact Us</h1>
            <h3>welcome to contact us page</h3>
    </div>
    <div>
      <h3>Contact Us</h3>
      <h1>Please Feel Free To <br /> Contact Us</h1>
    </div>
    <div>
      <form action="">
        <input type="text" placeholder='Enter Your Name' />
        <input type="email" placeholder='Enter Your Email' />
        <input type="text" placeholder='Enter Your Phone Number' />
        <textarea name="" id="" cols="30" rows="10" placeholder='Enter Your Message'></textarea>
        <button>Submit</button>
      </form>
    </div>
    </>
  )
}
