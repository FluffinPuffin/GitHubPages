import React, { useState } from 'react';

function RepetitionExercise({ name }) {
    const [setCount, setSetCount] = useState(0);
    const [repCount, setRepCount] = useState(0);

    const increaseSetCount = () => {
        setSetCount(setCount + 1);
        setRepCount(0); // Reset Reps whenever Set increases
    };

    const decreaseSetCount = () => {
        if (setCount > 0) {
            setSetCount(setCount - 1);
        }
        setRepCount(0); // Reset Reps if Set is decreased
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
                <button onClick={increaseSetCount}>Increase Set</button>
                <button onClick={increaseRepCount}>Increase Rep</button>
            </div>
            <div className="buttons">
                <button onClick={decreaseSetCount}>Decrease Set</button>
                <button onClick={decreaseRepCount}>Decrease Rep</button>
            </div>
        </div>
    );
}

export default RepetitionExercise;
