import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import Gallery from "./pages/Gallery";
import Project from "./pages/Project";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/project/:id" element={<Project />}/>
      </Routes>
      <Footer />
      <ScrollButton />
    </Router>
  );
}

export default App;
