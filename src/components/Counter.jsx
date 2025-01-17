import React, { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    function plus() {
        setCount(count + 1);
    }

    function minus() {
        setCount(count - 1);
    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={plus}>Plus</button>
            <button onClick={minus}>Minus</button>

        </div>
    )
}

export default Counter;