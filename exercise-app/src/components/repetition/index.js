import React, { useState } from 'react';

function RepetitionExercise({ name }) {
    const [setCount, setSetCount] = useState(0);
    const [repCount, setRepCount] = useState(0);

    const increaseSetCount = () => {
        setSetCount(setCount + 1);
    };

    const decreaseSetCount = () => {
        if (setCount > 0) {
            setSetCount(setCount - 1);
        }
    };

    const increaseRepCount = () => {
        setRepCount(repCount + 1);
    };

    const decreaseRepCount = () => {
        if (repCount > 0) {
            setRepCount(repCount - 1);
        }
    };

    return (
        <div className="repetition">
            <h2>{name}</h2>
            <div className="count-container">
                <div className="count">
                    <span>Sets: {setCount}</span>
                </div>
                <div className="count">
                    <span>Reps: {repCount}</span>
                </div>
            </div>
            <div className="buttons">
                <button onClick={increaseSetCount}>^</button>
                <button onClick={increaseRepCount}>^</button>
            </div>
            <div className="buttons">
                <button onClick={decreaseSetCount}>v</button>
                <button onClick={decreaseRepCount}>v</button>
            </div>
        </div>
    );
}

export default RepetitionExercise;
