import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import Coin from './pages/Coin';
import Favorites from './pages/Favorites';
import './App.css'

function App() {
    return <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coin/:id" element={<Coin />} />
            <Route path="/favorites" element={<Favorites />} />

        </Routes>
    </Router >
}

export default App;