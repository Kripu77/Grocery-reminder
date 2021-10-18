import React from 'react'
import singleItem from './singleItem'

const Display = ({list,setList}) => {

    return (
       <section className='records-diplay'>
    {
        list.map((listed)=>{
           const{id,value} = listed;
           return(
         <singleItem id={id} value={value}/>
           )
           
        })
    }


{/* button will only be visible when some items are present inside the array */}
<button className={ list.length<=0? 'clear-btn-invisible': "clear-btn" }onClick={()=>setList([])}>Clear All</button>
       </section>
    )
}

export default Display