import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    fluid?: boolean;
    className?: string;
}

const Container = ({ children, fluid = false, className }: ContainerProps) => {
    const cls = fluid ? `${className} container-fluid` : `${className} container`;
    return <section className={cls}>{children}</section>;
};

export default Container;
