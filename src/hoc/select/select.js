
import React from 'react'

import styles from './select.module.css'

const Select = ({value, handleChange, data}) => {
    const typeArray = [...new Set(data.map((item) => item.Type))]
    return (
      <div>   
      <form>
          <select value={value} onChange={handleChange} className={styles.container}>
              <option value="default"> Select Type to Display Data </option>
              {typeArray.sort().map((item, i) => {
                    return (
                        <option value={item} key={i}> {item} </option>
                    )
                    }
                )
            }          
          </select>
      </form>
      </div>
    );
}

export default Select
