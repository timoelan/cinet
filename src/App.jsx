// src/App.jsx
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GamePage from "./pages/GamePage";
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
  return (
    <>
      Hello motherfucking World!
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/game" component={GamePage} />
          <Route path="/login" component={Login} />
          <Route path="/map" component={Map} />
          <Route path="/profil" component={Profil} />
          <Route path="/register" component={Register} />
          <Route path="/shop" component={ShopPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
