import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount((prev) => prev - 1)}>-</button>
            <p>Count: {count}</p>
            <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        </div>
    )
}

export default Counter;