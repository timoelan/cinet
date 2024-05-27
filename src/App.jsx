// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './pages/Game';
import Index from './pages/Index';
import Login from './pages/Login';
import Map from './pages/Map';
import Profil from './pages/Profil';
import Register from './pages/Register';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/game" element={<Game />} />
          <Route path="/login" element={<Login />} />
          <Route path="/map" element={<Map />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="*" element={<NotFound />} /> {/* This will catch any undefined routes */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
