// eslint-disable-next-line
import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const EXPENSES = [
  {
    id: '1',
    title: 'Buy Python Basic Course',
    date: new Date(2021, 0, 1),
    price: 4.49
  },
  {
    id: '2',
    title: 'Buy a Gift for my kiddo',
    date: new Date(2021, 8, 3),
    price: 50.49
  },
  {
    id: '3',
    title: 'Buy brand new TV',
    date: new Date(2021, 7, 10),
    price: 445.49
  },
  {
    id: '4',
    title: 'Buy myself MacBook Pro 16 Inch',
    date: new Date(2021, 11, 10),
    price: 1445.49
  },
  {
    id: '4',
    title: 'Get Flutter App course done!',
    date: new Date(2020, 10, 3),
    price: 100
  }
]
function App() {
  const [expenses, setExpenses] = useState(EXPENSES);
  const addExpenseHandler = expense => {
    // console.log(expense);
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
    // console.log(expense);
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p> Let's Get Started with Basic Custom Component.</p>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses expenses={expenses} />
      </header>
    </div>
  );
}
export default App;
