import Navbar from './components/Navbar'
import './App.css'
import CardContainer from './components/CardContainer'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { calculateTotals } from './futures/card/cardSlice'
import Modal from './components/Modal'

function App() {
    const {cardItems} = useSelector(store => store.card);
    const {isOpen} = useSelector(store => store.modal)
    
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(calculateTotals());
    }, [cardItems]);
  return (
    <>
      {isOpen && < Modal/>}
      <Navbar/>
      <CardContainer/>
    </>
  )
}

export default App
