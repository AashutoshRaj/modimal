import React, { useReducer, useState } from 'react';
// import { todoReducer, initialState } from './todoReducer';


export const initialState = [];

function todoReducer(state, action) {
    switch (action.type) {
        case "Add_todo":
            return [ { id: Date.now(), text: action.payload, completed: false }];

        case "Toggle_Todo":
            return [];

        case "Delete_Todo":
            return state.filter(items => items.id !== action.payload);

        case "Clear_Todo":
            return [];

        default:
            return state;

    }
}


function TodoApp() {

    const [state, dispatch] = useReducer(todoReducer, initialState)
    const [text, setText] = useState();

    const handleTodo = () => {
        if (text) {
            console.log(text)
            dispatch({ type: "Add_todo", payload: text });
            setText()
        }
    }


    return (
        <>
            <div className=''>
                <input type='text' value={text} onChange={((e) => setText(e.target.value))} />
                <button onClick={handleTodo}>Add</button>
            </div>
            <ul>
                {state.map((items, index) => (
                    <li key={index}>
                        <span onClick={(() => dispatch({ type: Toggle_Todo , payload: items.id}))}>
                            {items.text}
                        </span>
                        <button onClick={(() => dispatch({ type: Delete_Todo, payload: items.id  }))}>
                            ❌
                        </button>
                    </li>
                ))}

                {state.length > 0 && (
                    <button onClick={(() => dispatch({ type: Clear_Todo}))}>
                    Clear List
                    </button> 
                   
                ) 
                }
             
            </ul>
        </>
    )
}

export default TodoApp;
