import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { addCustomerAction, removeCustomerAction } from './store/customerReduser';

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  // console.log(cash);

  const addCash = (num) => {
    dispatch({ type: 'ADD_CASH', payload: num })
  }

  const getCash = (num) => {
    dispatch({ type: 'GET_CASH', payload: num })
  }

  const addCustomer = (name) => {
    const customer = {
      name, 
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <h1>Hello redux...</h1>
      <div style={{ fontSize: '3rem' }}>{cash}</div>
      <div style={{ display: 'flex' }}>

        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        {/* <button onClick={() => getCash(Number(prompt()))}>Удалить клиента</button> */}
      </div>

      {customers.length > 0 ? 
        <div>
          {customers.map(customer =>
            <div onClick={() => removeCustomer(customer)} style={{fontSize: '2rem', border: '1px solid black', padding: '10px', marginTop: 5}}>
              {customer.name}
            </div>
          )}
        </div> 
        :
        <div>
          Клиенты отсутствуют!
        </div>
      }
    </div>
  );
}

export default App;
