import React, { useReducer } from 'react'
import TodoApp from './TodoReducer';


function counterReducer(state, action) {
    switch (action.type) {
        case 'Increment':
            return state + 1

        case 'Decrement':
            return state - 1

        case 'reset':
            return 0;


        case 'hide':
            return 0;

        case 'show':
            return 1;

        default:
            return state;


    }
}

const ReducerUse = () => {

    const [state, dispatch] = useReducer(counterReducer, 0)

    return (
        <>
        <TodoApp/>  
            <div className='toggle_hideShow'>
                <input type='checkBox' onClick={(() => dispatch({ type: 'hide' }))} />
            </div>

            {   
                state ? <div className='counterBlock'>
                    <button onClick={() => dispatch({ type: 'Decrement' })}>-</button>
                    <p>{state}</p>
                    <button onClick={() => dispatch({ type: 'Increment' })}>+</button>
                    <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
                </div> : '' 
            }






        </>
    )
}

export default ReducerUse
