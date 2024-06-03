// src/App.jsx
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Game from "./pages/Game";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Map from "./pages/Map";
import Profil from "./pages/Profil";
import Register from "./pages/Register";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // eslint-disable-next-line react/prop-types
  const ProtectedRoute = ({ element: Component }) => {
    return isLoggedIn ? <Component /> : <Navigate to="/login" />;
  };

  // eslint-disable-next-line react/prop-types
  const PublicRoute = ({ element: Component }) => {
    return !isLoggedIn ? <Component /> : <Navigate to="/" />;
  };

  return (
    <>
      <Header />
      <div className="main">
        <Router>
          <Routes>
            <Route path="/" element={<ProtectedRoute element={Index} />} />
            <Route path="/game" element={<ProtectedRoute element={Game} />} />
            <Route path="/map" element={<ProtectedRoute element={Map} />} />
            <Route
              path="/profil"
              element={<ProtectedRoute element={Profil} />}
            />
            <Route
              path="/shop"
              element={<ProtectedRoute element={ShopPage} />}
            />
            <Route path="/login" element={<PublicRoute element={Login} />} />
            <Route
              path="/register"
              element={<PublicRoute element={Register} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
