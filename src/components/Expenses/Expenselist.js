import React from "react";
import ExpenseItem from "./Expenseitem";
import './Expenselist.css';
const Expenselist=(props)=>{
    let content=<p>no data found</p>;
    
    if(props.items.length===0){
        return <h2 class="expenses-list__fallback">found no expense.</h2>
    }

   return(
   <ul class="expenses-list">
    {props.items.map((expenses)=> ( 
     <ExpenseItem
     key={expenses.id}
     title={expenses.title}
     amount={expenses.amount}
     date={expenses.date}
     />
   ))}; 
   </ul>
   );
};
export default Expenselist;