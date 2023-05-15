import React from "react";
import './chartBar.css';

const ChartBar =(props)=>{
    let barfillheight='0%';
    if(props.maxValue>0){
        barfillheight=Math.round((props.value/props.maxValue)*100)+'%';
    }
   return ( 
   <div class="chart-bar">
    <div class="chart-bar__inner">
     <div class="chart-bar__fill" style={{height:barfillheight}}></div>
    </div>
    <div class="chart-bar__label">{props.label}</div>
   </div>

   );
};
export default ChartBar;