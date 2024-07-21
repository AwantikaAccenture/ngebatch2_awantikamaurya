import React from 'react';

interface StepPointProps {
    active: boolean;
}

const StepPoint: React.FC<StepPointProps> = ({ active }) => {
    return (
        <div
            style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: active ? '#007bff' : '#ccc',
                display: 'inline-block',
                marginRight: '10px',
            }}
        />
    );
};

export default StepPoint;
