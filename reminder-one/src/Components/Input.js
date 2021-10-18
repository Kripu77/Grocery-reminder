import React,{useState, useEffect} from 'react'
import Display from './Display';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Input = () => {
const[value, setValue] = useState('')
const[list, setList] = useState([]);
const[added, setAdded] = useState(false);

const filterFn = (id)=>{
       toast.error('Thank you the item has been successfully removed')
    setList(list.filter((item)=>{
     
        return item.id!= id;
    }))
}

if(added==true){
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


    return (
        <>
        <section className='form' onSubmit={handleSubmit}>
            <form>
<input type="text" name='feild' id="feild" value={value} onChange={(e)=>setValue(e.target.value)}></input>
<button className='main-btn' type='submit'> Submit</button>


            </form>

        </section>
        <section>
            <Display list={list} setList={setList} filterFn={filterFn}/>
           

        </section>
        <ToastContainer/>
        </>
    )
}

export default Input
