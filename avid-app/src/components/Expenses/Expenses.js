import React, {useState} from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from './../UI/Card';
import './Expenses.css';

function Expenses (props) {
    const [filteredYear, setFilteredYear] = useState('2020');    
    const filterChangedHandler = (selectedValue) => {
        setFilteredYear(selectedValue);
    }
    const filteredExpenses = props.expenses.filter(item => {
        return item.date.getFullYear().toString() === filteredYear;        
    })
    
    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangedHandler}/>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} year={filteredYear} />
            </Card>
        </div>
    )
}

export default Expenses;