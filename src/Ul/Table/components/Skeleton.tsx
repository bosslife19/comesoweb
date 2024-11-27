import React from 'react';

interface PulsateProps {
    width?: string;
    height?: string;
    radius?: string;
}

const Skeleton: React.FC<PulsateProps> = ({ width = '100%', height = '100%', radius = '0px' }) => {
    return (
        <div
            className="pulsate"
            style={{ width, height, borderRadius: radius }}
        />
    );
};

export default Skeleton;
