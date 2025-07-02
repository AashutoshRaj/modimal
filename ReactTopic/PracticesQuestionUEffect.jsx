import React, { useState, useEffect } from "react";
import HeadingH3 from "../src/Components/HeadingH3/HeadingH3";
import TimerStartStop from "./TimerStartStop";

<style>
    
</style>

function PracticesQuestionUEffect() {
    const [name, setName] = useState("");
    const [userList, setUserList] = useState([]);
    const [isMessage, setMessage] = useState(false);

    useEffect(() => {
        document.title = name ? `Hello, ${name}` : "React App";
    }, [name]);

 
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                setUserList(data.map((item) => item))
                // console.log(userList)
            })

            .catch((err) => console.error(err));

    }, []);



    useEffect(() => {
        if (isMessage) {
            setTimeout(() => {
                setMessage(false)
            }, 3000);
        }
    }, [isMessage]) 

    // const getCompanyName = userList;

    // if (getCompanyName.length <= 10) {
    //     // console.log("print the list" , userList )
    //     // companyData.filter((item)=> item.company?.name?.length >= 10)
    //     console.log("company name", userList)
    //     // if(userList === name){
    //     //     console.log("you have company name")
    //     // }
    // } else {
    //     console.log("Your list is greater them 10")
    // }


    // Dark Mode Toggle with Body Class
    const [isDarkTheme, setDarkTheme] = useState([]);
    useEffect (()=>{       
        if(!isDarkTheme){
            document.body.style.background = "black"          
        }else{
            document.body.style.background = "white"
        }
    },[isDarkTheme])

    // 2. Countdown Timer
    const [isCountDown, setCountDown] = useState(3);
    const [isRuning, setRuning] = useState(false);

    useEffect (()=> {   
        setInterval(() => {
            setCountDown((count) => count - 1);
          
        }, 1000);
        
    }, [])

    useEffect(()=>{
        if(isCountDown < 0){
           setRuning(false) 
           setCountDown(0); 
       
        }
    })
// const [isOnline, setIsOnline] = useState(navigator.onLine);

//   useEffect(() => {
//     const handleOnline = () => setIsOnline(true);
//     const handleOffline = () => setIsOnline(false);

//     window.addEventListener("online", handleOnline);
//     window.addEventListener("offline", handleOffline);

//     // Cleanup function
//     return () => {
//       window.removeEventListener("online", handleOnline);
//       window.removeEventListener("offline", handleOffline);
//     };
//   }, []);

   
    // useEffect(()=>{

    //     setInterval(() => {
    //         setIsStartCount((stopCount) => stopCount == isStartCount)
    //     }, 1000);

    // })


    return (
        <div>
            <TimerStartStop/>
    {/* <h1 style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "Online ✅" : "Offline ❌"}
      </h1> */}

         {/* <button onClick={()=>{setIsStartCount()}}>Start</button> */}
            {/* <button onClick={()=>{setIsStartCount()}}>Pause</button> */}
       
             {/* <p>
                  Your timer {!isStartCount ? "Pause" : " Start"} Now : {isStartCount}
       </p> */}
       

       {/* <button onClick={()=>{setIsStopCount()}}>Stop</button> */}
     
            {/* {!isStartCount ? (
                <p>{isStartCount}</p>    
            ):(
                <>
                Time Pause
                </>
            )

            } */}



        <div className="">
            <p>Count Down {isCountDown}</p>
        </div>

        <div className="changeTheme">
                <input type="checkbox" onClick={()=>{setDarkTheme(!isDarkTheme)}}/>
                {!isDarkTheme ? (

                    <p style={{color:"#fff"}}>Dark</p>
                ): (
                    <p style={{color:"black"}}>Light</p>
                )

                }
        </div>



            {/* <h2>Change Page Title</h2>
            <input
                type="text"
                placeholder="Enter your name"
                // value={name}
                onChange={(e) => setName(e.target.value)}
            /> */}

            {/* Fetch and Display User List */}

            {/* <div className="">
                <HeadingH3 title="Fetch and Display User List" />
                <ul>
                    {userList.map((items, index) => (
                        <li key={index}>
                            {items.name}
                        </li>
                    ))
                    }
                </ul>
            </div>

            <div className="">
                <HeadingH3 title="Counter That Resets After Delay" />
                <button onClick={() => setMessage(true)}>Show Message</button>
                {isMessage && (
                    <>
                        Hello! Aashutosh
                    </>
                )

                }
            </div> */}


        </div>


    );
}

export default PracticesQuestionUEffect;



// import React, { useEffect, useState } from 'react'

// const PracticesQuestionUEffect = () => {

// const [isUserName, setUserName] = useState()

//     useEffect (()=>{
//         document.title = isUserName ? `Hello Name` : 'React App'


//     }, [])



//   return (
//     <div>
//         <input type='text' value={isUserName} onChange={(e)=> setUserName(e.target.value) }/>

//         <p>Hello {isUserName}</p>
//     </div>
//   )
// }

// export default PracticesQuestionUEffect
