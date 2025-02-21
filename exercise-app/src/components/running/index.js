import React, { useState } from 'react';

function RunningExercise({ name }) {
    // Set useState
    let array = [];
    const [count, setCount] = useState(0);
    const [currentTime, setCurrentTime] = useState('');

    // Add by 1
    const handleIncrement = () => {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString();
        setCurrentTime(formattedTime);
        setCount(count + 1);
        array.push(count + formattedTime);
    };

    // Reset to 0
    const handleReset = (array) => {
        setCount(0);
        setCurrentTime('');
        for (let i = 0; i < array.length; i++) {
            array.pop();
        }
    };

    const updateArray = (array) => {
        if (array === undefined) {
        } else {
            const listLaps = array.map((item) =>
                <li>{item}</li>
            );
            return (
                <ul>{listLaps}</ul>
            );
        }
    };

    // Display this to screen <div>Lap: {count} - Current Time: {currentTime}</div>
    return (
        <div class="running">
            <h2>{name}</h2>
            <button onClick={handleIncrement}>Lap</button>
            <button onClick={handleReset}>Reset</button>
            <div>Laps: Time: </div>
            {updateArray()}
        </div>
    );
}

export default RunningExercise;