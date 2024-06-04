import React, { useEffect, useState } from 'react';

interface InitializationRequest {
    elevatorsNumber: number;
    lowestFloor: number;
    highestFloor: number
}



const ElevatorInitialize: React.FC = () => {
    const [elevatorsNumber, setElevatorsNumber] = useState<number>(4);
    const [lowestFloor, setLowestFloor] = useState<number>(0);
    const [highestFloor, setHighestFloor] = useState<number>(10);

    return (
        <div>
            <h2>Elevator Initialize</h2>
            <div>
                <label>Elevators:</label>
                <input
                    type="number"
                    value={elevatorsNumber}
                    onChange={(e) => setElevatorsNumber(parseInt(e.target.value))}
                />
            </div>
            <div>
                <label>Lowest floor:</label>
                <input
                    type="number"
                    value={lowestFloor}
                    onChange={(e) => setLowestFloor(parseInt(e.target.value))}
                />
            </div>
            <div>
                <label>Highest floor:</label>
                <input
                    type="number"
                    value={highestFloor}
                    onChange={(e) => setHighestFloor(parseInt(e.target.value))}
                />
            </div>
        </div>
    );
};

export default ElevatorInitialize;
