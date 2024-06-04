import React, { useEffect, useState } from 'react';
import { getStatus } from '../services/api';

interface Elevator {
    id: number;
    currentFloor: number;
    targetFloor: number;
}

const ElevatorStatus: React.FC = () => {
    const [elevators, setElevators] = useState<Elevator[]>([]);

    useEffect(() => {
        fetchStatus();
    }, []);

    const fetchStatus = async () => {
        const response = await getStatus();
        setElevators(response.data);
    };

    return (
        <div>
            <h2>Elevator Status</h2>
            <button onClick={fetchStatus}>Refresh</button>
            <ul>
                {elevators.map((elevator) => (
                    <li key={elevator.id}>
                        Elevator {elevator.id}: Current Floor = {elevator.currentFloor}, Target Floor = {elevator.targetFloor}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ElevatorStatus;
