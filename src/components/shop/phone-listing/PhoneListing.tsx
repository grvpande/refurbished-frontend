import React from 'react';
import Container from 'components/ui/layout/Container';
import Grid from 'components/ui/layout/Grid';
import PhoneItem from 'components/shop/phone-item/PhoneItem';

export default function PhoneListing() {
    return (
        <div className="py-5 bg-light">
            <Container>
                <Grid gap={5} className="md:grid-cols-3 sm:grid-cols-2">
                    <div>
                        <PhoneItem />
                    </div>
                    <div>
                        <PhoneItem />
                    </div>
                    <div>
                        <PhoneItem />
                    </div>
                    <div>
                        <PhoneItem />
                    </div>
                    <div>
                        <PhoneItem />
                    </div>
                </Grid>
            </Container>
        </div>
    );
}
