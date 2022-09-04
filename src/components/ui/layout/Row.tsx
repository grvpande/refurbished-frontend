import React from 'react';

export interface RowProps {
    children: React.ReactNode;
    className: string;
}

export default function Row({ children, className }: RowProps) {
    return <div className={`row ${className}`}>{children}</div>;
}
