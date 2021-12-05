// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/expenseItem';


function App() {
  const expenses = [
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
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Let's Get Started with Basic Custom Component.</p>        
        <ExpenseItem title={expenses[0].title} price={expenses[0].price} date={expenses[0].date} />
        <ExpenseItem title={expenses[1].title} price={expenses[1].price} date={expenses[1].date} />
        <ExpenseItem title={expenses[2].title} price={expenses[2].price} date={expenses[2].date} />
        <ExpenseItem title={expenses[3].title} price={expenses[3].price} date={expenses[3].date} />
      </header>
    </div>
  );
}
export default App;
