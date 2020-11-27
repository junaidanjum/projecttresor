import React from 'react';
import {BarChart, Bar, XAxis} from 'recharts';

const Chart = (props) => {
    
var arr = []
    for ( let i = 5; i < 11; i++ ) {
        var total = 0;
        for (let j = 0; j < props.data.length; j++) {
            if (props.data[j].Type===props.value && parseInt(props.data[j].Date.split('/')[1])===i) {
                total = total + parseInt(props.data[j].Number)
            }
        }
        arr.push({number: total, month: i});
    }
    
    console.log(arr)
    return (     
        <BarChart width={1000} height={400} data={arr}>
            <XAxis dataKey="month"/>
          <Bar dataKey='number' fill="#8884d8" />
        </BarChart>
      );
}

export default Chart