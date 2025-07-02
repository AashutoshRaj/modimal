import React, { useEffect, useState } from 'react'

const TimerStartStop = () => {
     // Stopwatch (Start/Stop)
        const [isStartCount, setIsStartCount] = useState();
       const [countSec, setCountSec] = useState(0)
    
       
        useEffect(()=>{
            if(isStartCount)
            setInterval(() => {
             setCountSec((startCount) => startCount + 1);
              
            }, 1000);
    
        },[countSec])

        
  return (
    <div>
        <button onClick={() => setIsStartCount(true)} disabled={isStartCount}>Start</button>
       {/* <button onClick={()=>{setIsStopCount(false)}}>Stop</button> */}
        <p>Time: {countSec}</p> 
        <button onClick={() => setIsStartCount(false)} disabled={!isStartCount}>Stop</button> 
    </div>
  )
}

export default TimerStartStop
