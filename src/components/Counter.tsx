import React, { useState } from "react";
import "./Counter.scss";

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter((prevState) => prevState + 1);
    };
    const handleDecrement = () => {
        setCounter((prevState) => prevState - 1);
    };

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={handleIncrement}>INCREMENT</button>
            <button onClick={handleDecrement}>DECREMENT</button>
        </>
    );
};
