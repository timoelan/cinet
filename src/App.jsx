// src/App.jsx
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Game from "./pages/Game";
import Login from "./pages/Login";
import Index from "./pages/Index";
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
            <Route path="/index" element={<PublicRoute element={Index} />} />
            <Route path="/game" element={<PublicRoute element={Game} />} />
            <Route path="/map" element={<PublicRoute element={Map} />} />
            <Route
              path="/profil"
              element={<PublicRoute element={Profil} />}
            />
            <Route
              path="/shop"
              element={<PublicRoute element={ShopPage} />}
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
