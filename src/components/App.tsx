import React from 'react';
import ElevatorStatus from './ElevatorStatus';
import ElevatorControl from './ElevatorControl';
import ElevatorInitialize from "./ElevatorInitialize";

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Elevator Control System</h1>
            <ElevatorInitialize />
            <ElevatorControl />
            <ElevatorStatus />
        </div>
    );
};

export default App;
