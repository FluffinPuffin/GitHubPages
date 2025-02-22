import React, { useState, useEffect } from 'react';

function DurationExercise({ name }) {
    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        } else if (!isActive && timer !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, timer]);

    const start = () => {
        setIsActive(true);
    };

    const stop = () => {
        setIsActive(false);
    }

    const reset = () => {
        setIsActive(false);
        setTimer(0);
    };

    const formatTime = (seconds) => {
        const getSeconds = `0${seconds % 60}`.slice(-2);
        const minutes = Math.floor(seconds / 60);
        const getMinutes = `0${minutes % 60}`.slice(-2);
        return `${getMinutes}:${getSeconds}`;
    };

    return (
        <div className="duration">
            <h2>{name}</h2>

            <div className="timer">
                <div className="time-display">{formatTime(timer)}</div>
            </div>

            <div className="buttons">
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default DurationExercise;
