import React from 'react';
import Column from 'components/ui/layout/Column';
import Container from 'components/ui/layout/Container';
import Row from 'components/ui/layout/Row';
import PhoneItem from 'components/shop/phone-item/PhoneItem';

export default function PhoneListing() {
    return (
        <div className="py-5 bg-light">
            <Container>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <Column>
                        <PhoneItem />
                    </Column>
                </Row>
            </Container>
        </div>
    );
}
