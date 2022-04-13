import React, { useState } from 'react'
import { MultiSelect } from "react-multi-select-component";

let uniqueId = 0;

function Selectbox({ data }) {
  uniqueId++
  const [isChecked, setIsChecked] = useState(true)
  const [selected, setSelected] = useState([]);
  const [options, setOptions] = useState([]);

  useState(() => {
    let newLabels = data.map(item => {
      return ({
        label: item,
        value: item
      })
    })
    setOptions(newLabels)
  }, [])

  function checkHandle() {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <div className="dropdown-wrap">
        {data && data.length > 0 && (
          <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy={"Select"}
          />
        )}
        <div className="checkbox-wrap">
          <input
            id={`check${uniqueId}`}
            type="checkbox"
            checked={isChecked}
            onChange={checkHandle}
          />
          <label htmlFor={`check${uniqueId}`} onClick={() => checkHandle}>Show/Hide Not completed.</label>
        </div>


      </div>
    </>
  )
}

export default Selectbox