import React from 'react';

export interface ColumnProps {
    children: React.ReactNode;
    className: string;
}

export default function Column({ children, className }: ColumnProps) {
    return <div className={`col ${className}`}>{children}</div>;
}
