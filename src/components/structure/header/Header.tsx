import Container from 'components/ui/layout/Container';
import TextInput from 'components/ui/text-input/TextInput';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Container>
                <div className="columns-2">
                    <div>
                        <Link
                            to="/"
                            className="navbar-brand d-flex align-items-center"
                        >
                            <strong>Refurbished Phones</strong>
                        </Link>
                    </div>
                    <div>
                        <TextInput onChange={() => {}} />
                    </div>
                </div>
            </Container>
        </header>
    );
}
