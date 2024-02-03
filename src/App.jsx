import Footer from "./component/Footer"
import Navbar from "./component/Navbar"
import Main from "./component/Main"
import Project from "./component/Project"
import Contact from "./component/Contact"
import About from "./component/About"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'


function App() {
    return (
        <div className="app-container">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/portfolio/' element={<Main />} />
                    <Route path="/portfolio/Project" element={<Project />} />
                    <Route path="/portfolio//Contact" element={<Contact />} />
                    <Route path="/portfolio//About" element={<About />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App
