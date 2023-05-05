import React, { useState } from "react";
import classes from "./Counter.module.scss";

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
            <div className={classes.containerButton}>
                <button className={classes.button} onClick={handleIncrement}>
                    INCREMENT
                </button>
                <button className={classes.button} onClick={handleDecrement}>
                    DECREMENT
                </button>
            </div>
        </>
    );
};
