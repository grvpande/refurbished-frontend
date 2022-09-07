import { DEFAULT_BREAKPOINTS } from 'config';
import React from 'react';

export interface ColumnProps {
    children: React.ReactNode;
    className?: string;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
}

const getClasses = (rest: { [key: string]: any }) => {
    return DEFAULT_BREAKPOINTS.reduce((acc: string, element: string) => {
        const type = rest[element];
        acc = type ? `${acc} col-${element}-${type}` : acc;
        return acc;
    }, "");
};

export default function Column({ children, className, ...rest }: ColumnProps) {
    const changedClasses = getClasses(rest);
    return <div className={`col ${changedClasses} ${className}`}>{children}</div>;
}
