import React from "react";
import Chart from "../chart/chart";
const ExpensesChart=props=>{
   const chartdatapoint=[
    {label:'jan',value:0},
    {label:'feb',value:0},
    {label:'mar',value:0}, 
    {label:'apr',value:0}, 
    {label:'may',value:0},
    {label:'jun',value:0}, 
    {label:'jul',value:0},
    {label:'Aug',value:0}, 
    {label:'Sep',value:0}, 
    {label:'Oct',value:0},
    {label:'Nov',value:0}, 
    {label:'Dec',value:0},
   ];
    
   for(const expenses of props.expenses){
    const expenseMonth =expenses.date.getMonth();
    chartdatapoint[expenseMonth].value+=expenses.amount;
   };
    return <Chart dataPoints={chartdatapoint}/>;
};
export default ExpensesChart;