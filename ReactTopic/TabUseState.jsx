import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import Login from '../src/Components/LoginPages/Login';
import CreateAccount from '../src/Components/LoginPages/CreateAccount';


const TabUseState = () => {

const [isTab, setTab] = useState(0);



  return (
    <>
        <Box className="tabingBlock">
           <button onClick={() => setTab(0)}>Log In</button>
           <button onClick={() => setTab(1)}>Create Account</button>        
        </Box>

        <Box className="tabsData">
           {isTab === 0 && 
             <Login setTab={setTab}/>
           }
            {isTab === 1 && 
             <CreateAccount/>
           }
          
        </Box>
    </>
  )
}

export default TabUseState
