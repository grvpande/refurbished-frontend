import React, { Suspense } from 'react';
import Container from 'components/ui/layout/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/home/Home'));
const Components = React.lazy(() => import('./pages/ui-components/Components'));

function App() {
    return (
        <BrowserRouter>
            <Container fluid>
                <header className="App-header">
                    <h1>React app</h1>
                </header>

                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/components" element={<Components />} />
                    </Routes>
                </Suspense>
            </Container>
        </BrowserRouter>
    );
}

export default App;
