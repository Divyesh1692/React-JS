import React, { useState } from 'react';

const Counter = ({ initial, val }) => {
    const [count, setCount] = useState(initial);

    console.log(val, initial);

    const changeCount = (opr, value) => {
        if (opr === "+") {
            setCount(count + value);
        } else {
            setCount(count - value);
        }
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => changeCount("+", val)}>Increment</button>
            <button onClick={() => changeCount("-", val)}>Decrement</button>
            <button onClick={() => setCount(initial)}>Reset</button>
        </div>  
    );
};

export default Counter;
