import React from 'react'
import { useDispatch } from 'react-redux';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { removeItem } from '../futures/card/cardSlice';



const CardItem = ({id, img, title, price, amount}) => {
  const dispatch = useDispatch();
  return (
    <article className='card-item'>
      <img src={img} alt={title} />
      <div className="">
        <h4>{title}</h4>
        <h3 className="item-price">${price}</h3>
        <button 
          className="remove-btn"
          onClick={() => dispatch(removeItem(id))}
        >Remove</button>
        <div className="">
          <button className="amount-btn">
            <IoIosArrowUp />
          </button>
          <p className="amount">{amount}</p>
          <button className="amount-btn">
            <IoIosArrowDown />
          </button>
        </div>

      </div>
    </article>
  )
}

export default CardItem
