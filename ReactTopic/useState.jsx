import React, { useState } from 'react'

const UseStateTopic = () => {

    const [value, setValue] = useState(0);
    const [toggle , setToggle ] =  useState();
    const [text, setText] = useState("");

    // const buttonToggle = (()=>{
        
    // })

    const incrementBtn =(()=>{
        setValue(value + 1)
      
    })
    const decrement =(()=>{
        setValue(value - 1)
        if(value <= 0){
            setValue(0)
        } 
    })

    const resetValue = (()=>{
        setValue(0)
    })

    


  return (
    <>
     <h1>UseState:-</h1> 

     <div className='counter'>
        <button className='' onClick={decrement}>-</button>
            <input type='text' value={value}/>
        <button className='' onClick={incrementBtn}>+</button>
        <button className='' onClick={resetValue}>Reset Value</button>
     </div>


     <div className=''>
        <h3>Show Hide </h3>
        <button onClick={()=>{setToggle(!toggle)}}  >
         {toggle ? 'Hide' : "Show "}
        </button>
        {toggle && (
            <div className='tetBlock'>
            <p>Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own. This page lists all built-in Hooks in React.</p>
        </div> 
        ) 

        }
     </div>

     <div className=''>
        <h3>Enter Value will be change</h3>
        <input type='text' onChange={(()=>{})} />
        <p>{}</p>
     </div>   


    </>
  )
}

export default UseStateTopic


