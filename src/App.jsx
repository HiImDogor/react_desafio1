import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import LoginPage from "./components/loginPage";
import RegisterPage from "./components/registerPage";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      <LoginPage />
      <Footer />
    </div>
  );
}

export default App;
