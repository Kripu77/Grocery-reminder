import React from 'react'
import Item from './Item'

const Display = ({list,setList}) => {

    return (
       <section className='records-diplay'>
    {
        list.map((listed)=>{
         

        return <Item {...listed}/>
  
        })
    }


{/* button will only be visible when some items are present inside the array */}
<button className={ list.length<=0? 'clear-btn-invisible': "clear-btn" }onClick={()=>setList([])}>Clear All</button>
       </section>
    )
}

export default Display