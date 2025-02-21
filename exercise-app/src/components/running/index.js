import React, { useState } from 'react';

function RunningExercise({ name }) {
    // Set useState
    const [count, setCount] = useState(0);
    const [currentTime, setCurrentTime] = useState('');
    const [array, setArray] = useState([]);

    // Add by 1
    const handleIncrement = () => {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString();
        setCurrentTime(formattedTime);
        setCount(count + 1);
        setArray([...array, "Lap: "`${count + 1} - "Time: "${formattedTime}`]);
    };

    // Reset to 0
    const handleReset = () => {
        setCount(0);
        setCurrentTime('');
        setArray([]);
    };

    return (
        <div className="running">
            <h2>{name}</h2>
            <button onClick={handleIncrement}>Lap</button>
            <button onClick={handleReset}>Reset</button>
            <ul>
                {array.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default RunningExercise;