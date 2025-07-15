import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Forums from "./pages/Forums";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="app">
        <header className="header">
          <button className="menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
            &#9776;
          </button>
          <Link to="/" className="logo" style={{ marginLeft: "0.5rem" }}>
            <img
              src="/logo.png"
              alt="TOBADD.COM"
              style={{
                height: "50px",
                objectFit: "contain",
                verticalAlign: "middle"
              }}
            />
          </Link>
        </header>

        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

        <main className={`main ${sidebarOpen ? "dimmed" : ""}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/forums" element={<Forums />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;