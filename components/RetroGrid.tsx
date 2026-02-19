import React from 'react';

interface RetroGridProps {
    className?: string;
    angle?: number;
    cellSize?: number;
    opacity?: number;
    lineColor?: string;
}

const RetroGrid: React.FC<RetroGridProps> = ({
    className = '',
    angle = 65,
    cellSize = 60,
    opacity = 0.5,
    lineColor = '#00E38C',
}) => {
    const gridStyles: React.CSSProperties = {
        '--grid-angle': `${angle}deg`,
        '--cell-size': `${cellSize}px`,
        '--grid-opacity': opacity,
        '--line-color': lineColor,
    } as React.CSSProperties;

    return (
        <div
            className={`retro-grid-container ${className}`}
            style={gridStyles}
        >
            <div className="retro-grid-inner" />
        </div>
    );
};

export default RetroGrid;
