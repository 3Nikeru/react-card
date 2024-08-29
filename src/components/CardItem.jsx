import React from 'react'
import { useDispatch } from 'react-redux';



const CardItem = ({id, img, title, price, amount}) => {
  const dispatch = useDispatch();
  return (
    <article className='card-item'>
      <img src={img} alt={title} />
      <div className="">
        <h4>{title}</h4>
        <h3 className="item-price">${price}</h3>
        <button className="remove-btn">Remove</button>
      </div>
    </article>
  )
}

export default CardItem
