import React,{useState} from 'react'
import Display from './Display';

const Input = () => {
const[value, setValue] = useState('')
const[list, setList] = useState([]);


//prevents default
const handleSubmit = (e)=>{
e.preventDefault();
if(value &&'true'){
    const fnlValue = {id:new Date().getTime().toString(), value}
setList((prevValue)=>[...prevValue, fnlValue])
console.log(list)}
}
    return (
        <>
        <section className='form' onSubmit={handleSubmit}>
            <form>
<input type="text" name='feild' id="feild" value={value} onChange={(e)=>setValue(e.target.value)}></input>
<button className='main-btn' type='submit'> Submit</button>


            </form>

        </section>
        <section className='display-panel'>
            <Display list={list} setList={setList}/>
           

        </section>
        </>
    )
}

export default Input
