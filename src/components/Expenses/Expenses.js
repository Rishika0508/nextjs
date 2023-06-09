import React, { useState } from 'react';
 import ExpenseItem from './Expenseitem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import Card from '../UI/Card';
import Expenselist from './Expenselist';
import ExpensesChart from './ExpensesChart';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

   const filterChangeHandler = (selectedYear)=> {
     setFilteredYear(selectedYear);
   };
   const filteredData=props.items.filter(expenses=> {
      return expenses.date.getFullYear().toString() === filteredYear;
    });
     
  return (
    <div>
      <Card class='expenses'>
       <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredData}/>
        <Expenselist items={filteredData}/>
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        /> */}
        </Card>
    </div>
  );
};

export default Expenses;