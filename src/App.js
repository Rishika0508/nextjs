import React,{useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
const Dummy_expenses = [      
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14), 
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28), 
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2020, 5, 12),
  },

];
function App() {
  
  
    const[expenses,setexpenses]=useState(Dummy_expenses);
  
  const addExpensehandler=expense=>{
    const nexpense=[expense,...expenses];
    setexpenses(nexpense);

  };
  return (
    <div>
      <NewExpense onAddExpense={addExpensehandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;