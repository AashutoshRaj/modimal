import { Box } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components';



const CounterStyle = styled(Box)(({ theme }) => ({
    ".counter":{
        
        display: 'flex',
        alignItems: 'center',
        ".innerCounter":{
            background: '#D1D9CF',
            minWidth: '80px',
            display:"flex",
            alignItems:"center",
            button:{
                background: 'transparent',
                width: '24px',
                height: '24px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '30px',
                color: '#404E3E',
                outline:"unset",
                borderRadius:"0",
                border:"0",
            },
            input:{
                background: 'transparent',
                border: '0',
                maxWidth: '32px',
                height: '1.875vw',
                textAlign: 'center',
                fontSize: '16px',
                color: '#404E3E',
                outline:"unset",
                fontFamily:"'Montserrat'",
            },
        },
       
    }
}));


const Counter = () => {
 const [value, setValue] = useState(0);
    const incrementBtn =(()=>{
        setValue(value + 1)
      
    })
    const decrement =(()=>{
        setValue(value - 1)
        if(value <= 0){
            setValue(0)
        } 
    })
  return (
    <CounterStyle>
       <Box className='counter'>
        <Box className="innerCounter"> 
        <button className='' onClick={decrement}>-</button>
            <input type='text' value={value}/>
        <button className='' onClick={incrementBtn}>+</button>
        </Box>
        
     </Box>
    </CounterStyle>
  )
}

export default Counter
