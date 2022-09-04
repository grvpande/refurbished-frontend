import Button from 'components/ui/button/Button';
import React from 'react';

const dummyFn = () => {};

export default function UIComponents() {
    return (
        <div className="container">
            <Button type={'primary'} onClick={dummyFn}>
                primary button
            </Button>
        </div>
    );
}
