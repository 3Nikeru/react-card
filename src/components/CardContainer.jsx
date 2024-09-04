import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardItem from './CardItem'

const CardContainer = () => {
    const dispatch = useDispatch();
    // useSelector(store => console.log(store));
    const {total, amount, cardItems} = useSelector(state => state.card)

    if (amount < 1){
      return <section className='card'>
              <header>
                <h2>Your bag is empty</h2>
              </header>
            </section>
    }
  return (
    <section className='card'>
      <header>
        <h2>Your bag</h2>
      </header>
      <div className="card-folder">
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
