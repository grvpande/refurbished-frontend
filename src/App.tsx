import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'components/structure/header/Header';

const Home = lazy(() => import('pages/home/Home'));
const Components = lazy(() => import('pages/ui-components/Components'));
const PdpPage = lazy(() => import('pages/pdp/PdpComponent'));
const Notfound = lazy(() => import('pages/not-found/Notfound'));

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/components" element={<Components />} />
                        <Route path="/pdp/:id" element={<PdpPage />} />
                        <Route path="*" element={<Notfound />} />
                    </Routes>
                </Suspense>
            </main>
        </BrowserRouter>
    );
}

export default App;
