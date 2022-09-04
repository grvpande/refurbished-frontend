import React, { Suspense } from 'react';
import Container from 'components/ui/layout/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';

const Home = React.lazy(() => import('./pages/home/Home'));
const Components = React.lazy(() => import('./pages/ui-components/Components'));

function App() {
    return (
        <BrowserRouter>
            <header className={`${styles.header} sticky`}>
                <Container>
                    <h1>React app</h1>
                </Container>
            </header>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/components" element={<Components />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
