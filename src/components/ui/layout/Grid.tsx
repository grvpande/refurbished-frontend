import { DEFAULT_BREAKPOINTS } from 'config';
import React from 'react';

export interface GridProps {
    children: React.ReactNode;
    className?: string;
    gap: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    "2xl"?: number;
}

const getClasses = (rest: { [key: string]: any }) => {
    return DEFAULT_BREAKPOINTS.reduce((acc: string, element: string) => {
        const value = rest[element];
        acc = value ? `${acc} ${element}:grid-cols-${value}` : acc;
        return acc;
    }, "");
};

export default function Grid({ children, className = '', gap, ...rest }: GridProps) {
    const gridClasses = getClasses(rest);
    return (
        <div className={`grid grid-cols-1 gap-${gap} ${gridClasses} ${className}`}>
            {children}
        </div>
    );
}
