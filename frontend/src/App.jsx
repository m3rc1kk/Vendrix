import Hero from "./pages/Hero/Hero.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import './styles/styles.css'
import MainPage from "./pages/Main/MainPage.jsx";

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/main" element={<MainPage />} />
        </Routes>
    </Router>
  )
}

export default App
