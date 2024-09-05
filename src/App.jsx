import Navbar from './components/Navbar'
import './App.css'
import CardContainer from './components/CardContainer'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { calculateTotals } from './futures/card/cardSlice'

function App() {
    const {cardItems} = useSelector(store => store.card);
    // console.log(cardItems);
    
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(calculateTotals());
    }, [cardItems]);
  return (
    <>
      <Navbar/>
      <CardContainer/>
    </>
  )
}

export default App
