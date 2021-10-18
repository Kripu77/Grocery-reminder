import React from 'react'

const singleItem = ({id, value}) => {
       
    return (
        <div key={id} className='display-panel'>
        <h1>list</h1>
           <p>{value}</p>
        </div>
    )
}

export default singleItem;
