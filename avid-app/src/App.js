// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

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
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p> Let's Get Started with Basic Custom Component.</p>
        <NewExpense />
        <Expenses expenses={expenses} />
      </header>
    </div>
  );
}
export default App;
