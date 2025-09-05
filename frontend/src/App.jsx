import Hero from "./pages/Hero/Hero.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import './styles/styles.css'

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Hero />} />
        </Routes>
    </Router>
  )
}

export default App
