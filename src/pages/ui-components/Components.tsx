import React from 'react';
import Button from 'components/ui/button/Button';
import useSeo from 'hooks/useSeo';
import Container from 'components/ui/layout/Container';

const dummyFn = () => {};

export default function UIComponents() {
    useSeo({ title: 'dummy page for component', description: '' });
    return (
        <Container>
            <Button type={'primary'} onClick={dummyFn}>
                primary button
            </Button>
            <Button type={'secondary'} onClick={dummyFn}>
                secondary button
            </Button>
            <Button type={'unstyled'} onClick={dummyFn}>
                unstyled button
            </Button>
        </Container>
    );
}
