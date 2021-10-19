import React from 'react'
import Item from './Item'

const Display = ({list,setList, filterFn, editFn, editing, setEditing}) => {

    return (
       <section className='records-diplay'>
    {
        list.map((listed, index)=>{
         

        return <Item {...listed} filterFn= {filterFn} editFn={editFn} key={index} editing={editing} setEditing={setEditing}/>
  
        })
    }


{/* button will only be visible when some items are present inside the array */}
<button className={ list.length<=0? 'clear-btn-invisible': "clear-btn" }onClick={()=>setList([])}>Clear All</button>
       </section>
    )
}

export default Display