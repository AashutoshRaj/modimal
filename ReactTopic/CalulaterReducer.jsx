import { Box } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const CalculatorStyle = styled(Box)(({ theme }) => ({
    maxWidth:"400px",
    margin:"auto",
 $color_1: "#aaa",
  $color_2: "white",
  $backgroundColor_1: "#1e1e1e",
  $backgroundColor_2: "#333",
  $backgroundColor_3: "#444",
  $backgroundColor_4: "#00b894",
  ".calculator": {
    display: "grid",
    justifyContent: "center",
    alignContent: "center",
    //  
    gridTemplateColumns: "repeat(4, 80px)",
    gridTemplateRows: "minmax(120px, auto) repeat(5, 80px)",
    gap: "10px",
    padding: "20px",
    background: "#222"
  },
  ".output": {
    gridColumn: "1 / -1",
    backgroundColor: "$background-color_1",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-around",
    padding: "10px",
    wordWrap: "break-word",
    wordBreak: "break-all",
    borderRadius: "10px",
    ".previous": { color: "$color_1", fontSize: "1.2rem" },
    ".current": { color: "$color_2", fontSize: "2rem", fontWeight: "bold" }
  },
  button: {
    fontSize: "1.5rem",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "$background-color_2",
    color: "$color_2",
    cursor: "pointer",
    "&:hover": { backgroundColor: "$background-color_3" }
  },
  ".span-two": { gridColumn: "span 2", backgroundColor: "$background-color_4" }
}));


function calReducer (){
    switch(action.type){
        
              case "ACTIONS.ADD_DIGIT ":
            return []

              case "ACTIONS.CHOOSE_OPERATION ":
            return []

              case "ACTIONS.CLEAR ":
            return []

              case "ACTIONS.CLEAR ":
            return []
    }
}


const Calculator = () => {
  return (
    <CalculatorStyle>
   <div className="calculator">
      <div className="output">
        <div className="previous">
          {/* {previous} {operation} */}
        </div>
        <div className="current">
            {/* {current} */}
            </div>
      </div>

      {/* <button onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>DEL</button> */}
      <button onClick={() => dispatch({ })}>1</button>
      <button onClick={() => dispatch({  })}>2</button>
      <button onClick={() => dispatch({  })}>3</button>
      <button onClick={() => dispatch({ })}>÷</button>
      <button onClick={() => dispatch({  })}>4</button>
      <button onClick={() => dispatch({  })}>5</button>
      <button onClick={() => dispatch({  })}>6</button>
      <button onClick={() => dispatch({})}>×</button>
      <button onClick={() => dispatch({  })}>7</button>
      <button onClick={() => dispatch({  })}>8</button>
      <button onClick={() => dispatch({  })}>9</button>
      <button onClick={() => dispatch({  })}>−</button>
      <button onClick={() => dispatch({ })}>.</button>
      <button onClick={() => dispatch({  })}>0</button>
      <button className="" onClick={() => dispatch({  })}>=</button>
      <button onClick={() => dispatch({  })}>+</button>
    </div>
    </CalculatorStyle>
 
  );
};

export default Calculator;
