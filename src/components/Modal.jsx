import React from 'react'
import { closeModal } from '../futures/modal/modalSlice'
import { clearCard } from '../futures/card/cardSlice'
import { useDispatch } from 'react-redux'


const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div className='modal-container'>
      <div className="modal">
        <h4>Remove all items from card</h4>
        <div className="btn-container">
          <button className="btn confirm-btn" type='button' 
            onClick={
              ()=>{
                dispatch(clearCard());
                dispatch(closeModal());
              }
            }
          >Confirm</button>
          <button className="btn clear-btn" type='button'
            onClick={
              ()=>{
                dispatch(closeModal());
              }
            }
          >Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
