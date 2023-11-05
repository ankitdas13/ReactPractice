import React from 'react'

const Input = ({config, onChange}) => {
  return (
    <div style={{margin:'5px'}}>
       <input 
         {...config}
         onChange={onChange}
        />
    </div>
  )
}

export default Input