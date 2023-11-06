import React from 'react';
// import  appoint from '../pngtree-girl-blogger-in-the-laptop-with-social-media-icons-and-buttons-png-image_6437525-removebg-preview.png';
export default function AppoinmentApp() {
  return (
    // <div>
    // </div>
    //<></>
    <React.Fragment>
      
    <div className='appointment-app'>
    {/* <div className='appoint-img'>
    <img src={appoint} alt='appointment' title='appoint here' style={{width:"100%",height:"auto"}} />
    </div> */}
    <div className='appoint-form'>
    <h1>Sales Appoitment Request Form</h1>
    <hr />
    <form>
   <label>Prospect Name</label>
   <br /><br />
    <input type='text' placeholder='First Name*' required style={{width:"auto"}}/>
    <input type='text' placeholder='Last Name*' required style={{width:"auto"}} />
    <br /><br />
    <label>Company</label>
    <br /><br />
    <input type='text' className='company' required style={{width:"auto"}} />
    <br /><br />
    <label>Email Address</label>
    <br></br>
    <input type='email' placeholder='Enter Your Email Address' style={{width:"auto"}} required />
    <br /><br />
    <label>Phone Number</label><br></br>
    <input type='tel' placeholder='Phone Number'  style={{width:"auto"}}required />
    <br /><br /> 
    <label>Product/Service Detail </label> <br></br>
    <textarea name='product' rows={4} cols={10} style={{margin:"10px"}}/>
    <input type='submit' value="Book Appointment" placeholder='Name *'  />
    <br /><br />
    </form>
    </div>
    
    </div>
            </React.Fragment>
  )
}
