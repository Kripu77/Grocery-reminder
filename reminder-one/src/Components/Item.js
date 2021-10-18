import React from 'react'

const Item = ({id, value}) => {
       console.log(`the value is ${value}`)
    return (
        <div key={id} className='display-panel'>
      
           <p>{value}</p>
        </div>
    )
}

export default Item;
