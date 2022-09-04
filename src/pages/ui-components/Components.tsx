import React from 'react';
import Button from 'components/ui/button/Button';
import useSeo from 'hooks/useSeo';

const dummyFn = () => {};

export default function UIComponents() {
    useSeo({ title: 'dummy page for component', description: '' });
    return (
        <>
            <Button type={'primary'} onClick={dummyFn}>
                primary button
            </Button>
        </>
    );
}
