import React from 'react'
import { NavLink } from 'react-router-dom'
import './Payment.css'

function Payment() {
  return (
    <NavLink to="/payment" >
    <div>
    <div className='goback'>Go Back</div>
    <div className='payment'>
    <h1>Payment</h1>
    <div className='pay-detail'>
    <label htmlFor="">First Name:</label>
    <input type="text" placeholder='First Name Here'/>
    <label htmlFor="">Last Name:</label>
    <input type="text" placeholder='Last Name here' />
    <label htmlFor="">Email:</label>
    <input type="email" placeholder='Emial here' />
    </div>
    <div className='payment-option'>
    <label htmlFor="">Payment Option</label>
    <select name="payment" id="">
    <option value="">Credit crad</option>
    <option value="">Debit card</option>
    <option value="">UPI</option>
    </select>
    </div>
    <div className="card-detail">
     <label htmlFor="">Card holder Name</label>
     <input type="text" />
     <label htmlFor="">Expiration</label>
     <input type="date" />
     <label htmlFor="">CVV</label>
     <input type="text" maxLength="3" />
    </div>
    
    </div>
    </div>
    </NavLink>
  )
}

export default Payment