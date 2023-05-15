import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './Expenseitem.css';

const ExpenseItem = (props) => {
  return (
    <li>
    <Card class='expense-item'>
      <ExpenseDate date={props.date} />
      <div class='expense-item__description'>
        <h2>{props.title}</h2>
        <div class='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;