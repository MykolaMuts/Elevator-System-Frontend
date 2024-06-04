import React, { useEffect, useState } from 'react';
import { getStatus } from '../../services/api';
import './styles.css';

interface Elevator {
    id: number;
    currentFloor: number;
    targetFloor: number;
}

interface StatusResponse {
    elevators: Elevator[];
    highestFloor: number;
    lowestFloor: number;
}

const ElevatorStatus: React.FC = () => {
    const [elevators, setElevators] = useState<Elevator[]>([]);
    const [highestFloor, setHighestFloor] = useState(0);
    const [lowestFloor, setLowestFloor] = useState(0);

    useEffect(() => {
        fetchStatus();
    }, []);

    const fetchStatus = async () => {
        const response = await getStatus();
        const data: StatusResponse = response.data;
        setElevators(data.elevators);
        setHighestFloor(data.highestFloor);
        setLowestFloor(data.lowestFloor);
    };

    const renderGrid = () => {
        const grid = [];
        for (let floor = highestFloor; floor >= lowestFloor; floor--) {
            const row = [];
            for (let elevator of elevators) {
                let className = 'cell';
                let arrow = '';
                if (floor === elevator.currentFloor) {
                    className += ' current';
                    if (elevator.currentFloor < elevator.targetFloor) {
                        arrow = '↑';
                    } else if (elevator.currentFloor > elevator.targetFloor) {
                        arrow = '↓';
                    }
                }
                if (floor === 0) {
                    className += ' ground';
                }
                row.push(
                    <div key={`${elevator.id}-${floor}`} className={className}>
                        {arrow}
                    </div>
                );
            }
            grid.push(
                <div key={floor} className="row">
                    {row}
                    <div className="floor-label">{floor}</div>
                </div>
            );
        }
        return grid;
    };

    return (
        <div className="elevator-status">
            <h2>Elevator Status</h2>
            <div className="refresh-container">
                <button onClick={fetchStatus}>Refresh</button>
            </div>
            <div className="grid">
                {renderGrid()}
            </div>
        </div>
    );
};

export default ElevatorStatus;
