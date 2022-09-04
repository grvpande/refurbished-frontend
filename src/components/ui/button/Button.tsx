import React from 'react';

export interface ButtonProps {
    type: 'primary' | 'secondary' | 'unstyled';
    children: React.ReactNode;
    ariaLabel?: string;
    onClick: () => void;
    id?: string;
}

export default function Button({
    type,
    children,
    ariaLabel,
    onClick,
    id,
}: ButtonProps) {
    return (
        <button
            className={`btn btn-${type}`}
            aria-label={ariaLabel}
            id={id}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
