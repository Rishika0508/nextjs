import React,{useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm=(props)=>{
    const [newtitle,setnewtitle]=useState('');
    const [newamount,setnewamount]=useState('');
    const[newDate,setnewDate]=useState('');
    const titlechangehandler=(event)=>{
      setnewtitle(event.target.value);
      //console.log(newtitle);
    };
    
    const amountchangehandler=(event)=>{
        setnewamount(event.target.value);
        //console.log(newamount);
    };
     
    const datechangehandler=(event)=>{
        setnewDate(event.target.value);
       // console.log(newDate);
    };
    const submithandler=(event)=>{
    event.preventDefault();
    
    const expenseData={
        title:newtitle,
        amount:newamount,
        date:new Date(newDate)
    };
    props.onSaveExpenseData(expenseData);
   // console.log(expenseData);
    setnewtitle('');
    setnewamount('');
    setnewDate('');
    };
    
    return(
        <form onSubmit={submithandler}>
         <div class='new-expense__controls'>
            <div class='new-expense__control'>
                <label>Title</label>
                <input type='text' value={newtitle} onChange={titlechangehandler}/>
            </div>
            <div class='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01'value={newamount} onChange={amountchangehandler}/>
            </div>  <div class='new-expense__control'>
                <label>Date</label>
                <input type='date' min ="2019-01-01" max="2022-12-31" value={newDate} onChange={datechangehandler}/>
            </div>
            </div>
            <div class="new-expense__actions">
                <button type="submit" >Add Expense</button>
                <button type='button' onClick={props.onCancel}>cancel</button>
                </div>   
        </form>
    
    )
};

export default ExpenseForm;