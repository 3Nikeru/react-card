import Navbar from './components/Navbar'
import './App.css'
import CardContainer from './components/CardContainer'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { calculateTotals, getCardItems } from './futures/card/cardSlice'
import Modal from './components/Modal'

function App() {
    const {cardItems, isLoading} = useSelector(store => store.card);
    const {isOpen} = useSelector(store => store.modal)
    
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(calculateTotals());
    }, [cardItems]);

    useEffect(()=>{
      // console.log(getCardItems());
      dispatch(getCardItems())
    },[])

    if(isLoading){
      return (
        <div className="loading">
          <h1>loading...</h1>
        </div>
      )
    }
  return (
    <>
      {isOpen && < Modal/>}
      <Navbar/>
      <CardContainer/>
    </>
  )
}

export default App
