import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Pizza from "./components/Pizza";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div
        className="d-flex flex-column min-vh-100 w-100"
        style={{ margin: 0, padding: 0 }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
