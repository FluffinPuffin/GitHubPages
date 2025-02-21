import React, { useState } from 'react';

function RepetitionExercise({ name }) {
    // Set useState
    const [count, setCount] = useState(0);
    const [currentTime, setCurrentTime] = useState('');

    // Add by 1
    const handleIncrement = () => {
        setCount(count + 1);
        const now = new Date();
        const formattedTime = now.toLocaleTimeString();
        setCurrentTime(formattedTime);
    };

    // Reset to 0
    const handleReset = () => {
        setCount(0);
        setCurrentTime('');
    };

    // Display this to screen
    return (
        <div class="running">
            <h2>{name}</h2>
            <div>Lap: {count} - Current Time: {currentTime}</div>
            <button onClick={handleIncrement}>Lap</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default RepetitionExercise;