import React from 'react';
import {BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';

const Chart = (props) => {
    
var monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
var months = [...new Set(props.data.map((item) => parseInt(item.Date.split('/')[1])))]

var arr = []
    for ( let i = months[0]; i < months[months.length-1]; i++ ) {
        var total = 0;
        for (let j = 0; j < props.data.length; j++) {
            if (props.data[j].Type===props.value && parseInt(props.data[j].Date.split('/')[1])===i) {
                total = total + parseInt(props.data[j].Number)
            }
        }
        arr.push({number: total, month: monthName[i-1]});
    }
    return (     
        <div>
        <BarChart width={1000} height={400} data={arr}>
            <XAxis dataKey="month"/>
            <YAxis/>
            <Tooltip/>
          <Bar dataKey='number' fill="#8884d8" />
        </BarChart>
        </div>
      );
}
export default Chart