import { useDispatch, useSelector } from 'react-redux';
import './App.scss';

function App() {

  const dispatch = useDispatch()
  const cash = useSelector( state => state.cash.cash)
  console.log(cash);

  const addCash = (num) => {
    dispatch({type: 'ADD_CASH', payload: num})
  }

  const getCash = (num) => {
    dispatch({type: 'GET_CASH', payload: num})
  }

  return (
    <div className="App">
      <h1>Hello redux...</h1>
      <div style={{fontSize: '3rem'}}>{cash}</div>
      <div style={{display: 'flex'}}>

      <button onClick={() => addCash( Number(prompt()) )}>Пополнить счет</button>
      <button onClick={() => getCash( Number(prompt()) )}>Снять со счета</button>
      </div>
    </div>
  );
}

export default App;
