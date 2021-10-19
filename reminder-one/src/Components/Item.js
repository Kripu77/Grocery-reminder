import React from 'react'
import { AiFillDelete} from "react-icons/ai";
import { AiFillEdit} from "react-icons/ai";
const Item = ({id, value, filterFn, editFn}) => {
       console.log(`the value is ${value}`)
    //    main display panel
    return (
        <div key={id} className='display-panel'>
      
           <p className='list'>{value} </p>
           <div className='btn-container'>
           <button className='dlt-btn' onClick={()=>filterFn(id)}> <AiFillDelete/> </button>
           <button className='clr-btn' onClick={()=>editFn(id)}> <AiFillEdit/> </button>
           </div>
        </div>
    )
}

export default Item;
