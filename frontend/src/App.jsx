import Welcome from "./pages/welcome/Welcome.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import './styles/styles.css'

function App() {

  return (
    <Router>
        <Header />
        <Routes>
            <Route path="/" component={<Welcome />} />
        </Routes>
    </Router>
  )
}

export default App
