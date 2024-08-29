import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardItem from './CardItem'

const CardContainer = () => {
    const dispatch = useDispatch();
    // useSelector(store => console.log(store));
    const {total, amount, cardItems} = useSelector(state => state.card)
  return (
    <section className='card'>
      <header>
        <h2>Your bag</h2>
      </header>
      <div className="">
        {cardItems.map(item => {
           return (
                <CardItem key={item.id} {...item}/> 
           ) 

        })}
      </div>
    </section>
  )
}

export default CardContainer
