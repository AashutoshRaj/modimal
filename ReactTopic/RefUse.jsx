import React, { useEffect, useRef, useState } from 'react'

const RefUse = () => {
    const inputRef = useRef(null);

  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);
  

  return (
    <div>
        <p>Current: {count}</p>
        <p>Previous: {prevCount.current}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default RefUse
