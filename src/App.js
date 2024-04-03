import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TopNav from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ParticlesComponent from "./components/ParticlesOpts";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
    return (
        <Router>
            <div>
                <TopNav />
                <ParticlesComponent id="tsparticles" />
                <AnimatedRoutes />
            </div>
        </Router>
    );
}

export default App;
