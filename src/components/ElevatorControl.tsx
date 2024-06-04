import React, { useState } from 'react';
import { pickup, step } from '../services/api';

const ElevatorControl: React.FC = () => {
    const [floor, setFloor] = useState<number>(0);
    const [direction, setDirection] = useState<number>(1);

    const handlePickup = async () => {
        await pickup(floor, direction);
    };

    const handleStep = async () => {
        await step();
    };

    return (
        <div>
            <h2>Elevator Control</h2>
            <div>
                <label>Floor:</label>
                <input
                    type="number"
                    value={floor}
                    onChange={(e) => setFloor(parseInt(e.target.value))}
                />
            </div>
            <div>
                <label>Direction:</label>
                <input
                    type="number"
                    value={direction}
                    onChange={(e) => setDirection(parseInt(e.target.value))}
                />
            </div>
            <button onClick={handlePickup}>Pickup</button>
            <button onClick={handleStep}>Step</button>
        </div>
    );
};

export default ElevatorControl;
