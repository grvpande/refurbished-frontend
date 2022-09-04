import React, { Suspense, lazy } from 'react';
import Container from 'components/ui/layout/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';

const Home = lazy(() => import('./pages/home/Home'));
const Components = lazy(() => import('./pages/ui-components/Components'));
const PdpPage = lazy(() => import('./pages/pdp/PdpComponent'));
const Notfound = lazy(() => import('./pages/not-found/Notfound'));

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
                    <Route path="/pdp/:id" element={<PdpPage />} />
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
