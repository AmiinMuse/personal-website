import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import Salesforce from "./pages/projects/Salesforce";
import Fermilab from "./pages/projects/Fermilab";
import NorthwesternIT from "./pages/projects/NorthwesternIT";

import NeuroNet from "./pages/projects/NeuroNet";
import FareShare from "./pages/projects/FareShare";
import Portfolio from "./pages/projects/Portfolio";
import Battleship from "./pages/projects/Battleship";

import { Box } from "@mui/material";


function App() {
  return (
    <Router>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <Box sx={{ flex: 1 }}> {/* Ensures content area grows */}
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Experience Pages */}
            <Route path="/experiences/salesforce" element={<Salesforce />} />
            <Route path="/experiences/fermilab" element={<Fermilab />} />
            <Route path="/experiences/northwestern-it" element={<NorthwesternIT />} />

            {/* Project Pages */}
            <Route path="/projects/neuronet" element={<NeuroNet />} />
            <Route path="/projects/fareshare" element={<FareShare />} />
            <Route path="/projects/portfolio" element={<Portfolio />} />
            <Route path="/projects/battleship" element={<Battleship />} />
          </Routes>
        </Box>
        <Footer /> {/* Stays at the bottom */}
      </Box>
    </Router>
  );
}

export default App;

