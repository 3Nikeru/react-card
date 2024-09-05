import React from 'react'
import { useDispatch } from 'react-redux';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { removeItem, decrease, increase } from '../futures/card/cardSlice';



const CardItem = ({id, img, title, price, amount}) => {
  const dispatch = useDispatch();
  // console.log(amount);
  
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
        <div className="amount-folder">
          <button className="amount-btn" onClick={()=> dispatch(increase(id))}>
            <IoIosArrowUp />
          </button>
          <p className="amount">{amount}</p>
          <button className="amount-btn" onClick={()=> dispatch(decrease(id))}>
            <IoIosArrowDown />
          </button>
        </div>

      </div>
    </article>
  )
}

export default CardItem
