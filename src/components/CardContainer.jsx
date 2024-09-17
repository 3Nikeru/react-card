import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardItem from './CardItem'
import { openModal } from '../futures/modal/modalSlice';


const CardContainer = () => {
    const dispatch = useDispatch();
    // useSelector(store => console.log(store));
    const {total, amount, cardItems} = useSelector(state => state.card)

    if (amount == 0){
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
      <footer className="footer">
        <hr />
        <div className="card-total">
          <h4>
            Total: <span>{total.toFixed(2)}</span>
          </h4>
          <button className="clear-btn" onClick={()=>dispatch(openModal())}>
            Clear Card
          </button>
        </div>
      </footer>
    </section>
  )
}

export default CardContainer
