import React from 'react'
import { useSelector } from 'react-redux'
import { FaOpencart } from "react-icons/fa";


const Navbar = () => {
  const {amount} = useSelector(state => state.card)
  console.log(amount)
  return (
    <nav>
      <div className='nav-center'>
        <h3>Card</h3>
        <div className='cart'>
          <FaOpencart />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
