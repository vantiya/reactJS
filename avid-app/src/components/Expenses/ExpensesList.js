import React from 'react';
import ExpenseItem from './expenseItem';
import './ExpensesList.css';

const ExpensesList = props => {
    
    const filteredExpenses = props.items;
    let expensesContent = <p>No Expense Item found for the year {props.year}!</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(item => 
            <ExpenseItem key={item.id} title={item.title} price={item.price} date={item.date} />
        );
    }
    return expensesContent
}

export default ExpensesList;