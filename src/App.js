import React, {useState, useEffect} from 'react'
import { csv } from 'd3'
import Chart from './hoc/chart.js'
import Select from './hoc/select.js'
const App = () => {
  const [data, setData] = useState()
  const [value, setValue] = useState()

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
      (   <div>
          Hello
          <br/>
          <Chart data= {data} value={value}/>
          <Select value={value} handleChange={handleChange} data={data}/>
          {/* {data[3].Type} */}
          </div>
  ) : null
  )
}

export default App
