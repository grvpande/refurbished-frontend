import React from 'react';
import Container from 'components/ui/layout/Container';
import Row from 'components/ui/layout/Row';
import Column from 'components/ui/layout/Column';

export default function Hero() {
    return (
        <Container className="py-5 text-center">
            <Row className="py-lg-5">
                <Column lg={6} md={8} className="mx-auto">
                    <h1 className="fw-light">Album example</h1>
                    <p className="lead text-muted">
                        Something short and leading about the collection
                        below—its contents, the creator, etc. Make it short and
                        sweet, but not too short so folks don’t simply skip over
                        it entirely.
                    </p>
                    <p>
                        <a href="#" className="btn btn-primary my-2">
                            Main call to action
                        </a>
                        <a href="#" className="btn btn-secondary my-2">
                            Secondary action
                        </a>
                    </p>
                </Column>
            </Row>
        </Container>
    );
}
