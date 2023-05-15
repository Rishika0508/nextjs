import React from "react";
import ChartBar from './chartBar';
import './chart.css';

const chart=(props)=>{
  const dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value);
  const totalMaximum=Math.max(...dataPointValues);

  return(
  <div class="chart">
    {props.dataPoints.map((dataPoint)=> (
    <ChartBar
    key={dataPoint.label} 
    value={dataPoint.value}
     maxValue={totalMaximum}
      label={dataPoint.label}/>
      ))}
      </div>
  )
};
export default chart;