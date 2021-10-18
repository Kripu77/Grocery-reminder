import React,{useState, useEffect} from 'react'
import Display from './Display';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  //get items from local storage to remove the volatility
  const getLocalStorage = ()=>{
      let list = localStorage.getItem('list');
      //truthy and falsy to check if there is something avaibale in the local storage to prevent
      if(list){
return JSON.parse(localStorage.getItem('list'))
      }
      else return []
  }

const Input = () => {
const[value, setValue] = useState('')
const[list, setList] = useState(getLocalStorage());
const[added, setAdded] = useState(false);

const filterFn = (id)=>{
       toast.error('Item removed')
    setList(list.filter((item)=>{
     
        return item.id!== id;
    }))
  
}
//to edit the entered value
const editFn = (id)=>{
  setValue(list.find((value,index)=>{
      console.log(id)
        return value.id===id;
    }))
}




if(added===true){
 toast.success('Item Added')
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
setValue('')}
}


//to add items in local storage

useEffect(()=>{
localStorage.setItem('list', JSON.stringify(list))
},[list])
    return (
        <>
        <section className='form' onSubmit={handleSubmit}>
            <form>
<input type="text" name='feild' id="feild" placeholder='E.G. LazyLoading' value={value} onChange={(e)=>setValue(e.target.value)}></input>
<button className='main-btn' type='submit'> Submit</button>


            </form>

        </section>
        <section>
            <Display list={list} setList={setList} filterFn={filterFn} editFn={editFn}/>
           

        </section>
        <ToastContainer/>
        </>
    )
}

export default Input
