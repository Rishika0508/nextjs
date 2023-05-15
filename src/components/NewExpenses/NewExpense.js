import React,{useState} from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const[isEditing,setIsediting]=useState(false);
    const saveExpenseDatahandler=(enteredExpeseData)=>{
        const expenseData={
            ...enteredExpeseData,
            id:Math.random().toString()
        };       
        //console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsediting(false);
    };  
    const startEditing=()=>{
        setIsediting(true);
    }
    const stopediting=()=>{
        setIsediting(false);
    }
    return (
    <div Class='new-expense'>
       {!isEditing && <button onClick={startEditing}>Add New Expenses</button>}
   {isEditing&&<ExpenseForm onSaveExpenseData={saveExpenseDatahandler} onCancel={stopediting}/>}
    </div> 

    )
};

export default NewExpense;