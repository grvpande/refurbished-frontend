import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    fluid?: boolean;
}

const Container = ({ children, fluid = false }: ContainerProps) => {
    const clssName = fluid ? 'container-fluid' : 'container';
    return <div className={clssName}>{children}</div>;
};

export default Container;
