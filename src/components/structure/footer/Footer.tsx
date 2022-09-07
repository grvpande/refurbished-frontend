import React from 'react';
import Container from 'components/ui/layout/Container';

export default function Footer() {
    return (
        <footer className="text-muted py-5">
            <Container>
                <p className="mb-1">
                    &copy; your copyright text
                </p>
            </Container>
        </footer>
    );
}
