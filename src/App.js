import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import PageNotFound from './pages/PageNotFound';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/sign-up" element={<PageNotFound />} />
                <Route path="/watch-trailer" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default App;
