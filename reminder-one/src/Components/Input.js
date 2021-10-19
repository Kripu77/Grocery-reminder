import React,{useState, useEffect} from 'react'
import Display from './Display';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  //get items from local storage to remove the volatility

const getLocalStorage = ()=>{
    const list = localStorage.getItem('list');

    //truthy falsy check if there is any value present in the local storage
    if(list){
        return JSON.parse(localStorage.getItem('list'))
    }
    else return []
}


//main component
const Input = () => {
const[value, setValue] = useState('')
const[list, setList] = useState(getLocalStorage());

const[added, setAdded] = useState(false);
const[editing, setEditing] = useState(false);
const[editID, setEditId]=  useState(null)

const filterFn = (id)=>{
       toast.error('Item removed')
    setList(list.filter((item)=>item.id!== id

    ))
  
}
//to edit the entered value
const editFn = (id)=>{
   
        const editItem = list.find((value,index)=>{
        return value.id===id;
    })
    console.log(editItem)
    setEditing(true)
    setEditId(id)
    setValue(editItem.value)

}







//useEffect to remove the toast

useEffect(()=>{
    setTimeout(()=>{
        setAdded(false)
    },1000)
},[added])

//prevents default
const handleSubmit = (e)=>{
e.preventDefault();
if(value &&'true'){
    const fnlValue = {id:new Date().getTime().toString(), value}
setList((prevValue)=>[...prevValue, fnlValue])
console.log(list)
setAdded(true);

// once excecution is complete clear the input feild
setValue('')
setEditing(false)
if(added===true){
 toast.success('Item Added')
}

}
if(editing==true){
    setList(list.map((item)=>{
        //edit id is coming fromn use state
        if(item.id===editID){
            toast.success("value changed")
            return {...item, value}
               
        }
      
        return item
       

    }))
    setEditing(false)
    setEditId(null)
    setValue('')

}
}


//to add items in local storage

useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(list))
}, [list])


    return (
        <>
        <section className='form' onSubmit={handleSubmit}>
            <form>
<input type="text" name='feild' id="feild" placeholder='E.G. LazyLoading' value={value} onChange={(e)=>setValue(e.target.value)}></input>
<button className='main-btn' type='submit'> Submit</button>


            </form>

        </section>
        <section>
            <Display list={list} setList={setList} filterFn={filterFn} editFn={editFn} editing={editing} setEditing={setEditing}/>
           

        </section>
        <ToastContainer/>
        </>
    )
}

export default Input
