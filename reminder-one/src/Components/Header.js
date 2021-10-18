import React,{useRef, useEffect} from 'react'
  import { init } from 'ityped'
const Header = () => {
    const textRef = useRef()

    //text reffect side effect dealer
    useEffect(()=>{
init(textRef.current,{ showCursor: false, backDelay:4000, backSpeed:80, strings:["Daily Reminder", "TO DO"]})
    
}, [])
    return (
        <header>
            <h1 className='changing-heading' ref={textRef}>  </h1>
            <section className='bar'></section>
        </header>
    )
}

export default Header
