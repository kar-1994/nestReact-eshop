import React, { useState } from 'react'


function Counter() {
    let [n, setCount] = useState(0);
    let increase = () => {
        n++
        setCount(n)
        console.log(n);
    }
    let reset = () => {
        n = 0;
        setCount(n)
    }
    return (
        <div>
            <p>value:{n}</p>
            <button style={{ margin: "2px" }} onClick={increase}>increase</button>
            <button style={{ margin: "2px" }} onClick={reset}>reset</button>
        </div>
    );

}

export default Counter;
