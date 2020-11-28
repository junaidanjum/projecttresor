import React, {useState, useEffect} from 'react'
import { csv } from 'd3'
import Chart from './hoc/chart/chart.js'
import Select from './hoc/select/select.js'

import styles from './App.module.css'


const App = () => {
  const [data, setData] = useState()
  const [value, setValue] = useState("default")

useEffect(()=> {
    csv('data.csv').then(data => {
      setData(data);
    })
  }, [])

  const handleChange = (e) => {
    setValue(e.target.value)
}
  return (
    (data) ? 
      (   <div className={styles.container}>
          <Select value={value} handleChange={handleChange} data={data}/>
          {(value!=="default") ? 
          (<div className="chart">
            <h4> Bar chart for Type {value} </h4>
            <Chart data= {data} value={value}/>
          </div>) 
          : 
          null }
          </div>
  ) : null
  )
}

export default App
