import React, {useState} from 'react';
import {initializeSystem} from '../services/api';

interface ElevatorInitializeProps {
    onInitialized: () => void;
}

const ElevatorInitialize: React.FC<ElevatorInitializeProps> = ({ onInitialized }) => {
    const [elevatorsNumber, setElevatorsNumber] = useState<number>(4);
    const [lowestFloor, setLowestFloor] = useState<number>(0);
    const [highestFloor, setHighestFloor] = useState<number>(10);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await initializeSystem(elevatorsNumber, lowestFloor, highestFloor);
            alert('System initialized successfully');
            onInitialized();
        } catch (error) {
            console.error('Error initializing system:', error);
            alert('Failed to initialize system');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Elevator Initialize</h2>
            <div>
                <label>Elevators:</label>
                <input
                    type="number"
                    value={elevatorsNumber}
                    onChange={(e) => setElevatorsNumber(parseInt(e.target.value))}
                    required
                />
            </div>
            <div>
                <label>Lowest floor:</label>
                <input
                    type="number"
                    value={lowestFloor}
                    onChange={(e) => setLowestFloor(parseInt(e.target.value))}
                    required
                />
            </div>
            <div>
                <label>Highest floor:</label>
                <input
                    type="number"
                    value={highestFloor}
                    onChange={(e) => setHighestFloor(parseInt(e.target.value))}
                    required
                />
            </div>
            <button type="submit">Initialize System</button>
        </form>
    );
};

export default ElevatorInitialize;
