import React from 'react';

export interface GridProps {
    children: React.ReactNode;
    className?: string;
    gap: number;
}

export default function Grid({ children, className = '', gap }: GridProps) {
    return (
        <div className={`grid grid-cols-1 gap-${gap} ${className}`}>
            {children}
        </div>
    );
}
