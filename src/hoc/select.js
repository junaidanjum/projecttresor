import React from 'react'

const Select = ({value, handleChange, data}) => {


    const typeArray = [... new Set(data.map((item) => item.Type))]
    console.log(typeArray)
    return (
      <form>
        <label>
            Select type: 
          <select value={value} onChange={handleChange}>
              {typeArray.sort().map((item, i) => {
                    return (
                        <option value={item} key={i}> {item} </option>
                    )
                    }
                )
            }          
          </select>
        </label>
      </form>
    );
}

export default Select
