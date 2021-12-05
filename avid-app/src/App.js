// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/expenseItem';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p> Let's Get Started with Basic Custom Component.</p>
        <ExpenseItem></ExpenseItem>
      </header>
    </div>
  );
}
export default App;
