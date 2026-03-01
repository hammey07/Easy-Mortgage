import { useState } from "react";
import "./styles/global.scss";
import "./styles/navbar.scss";
import "./styles/button.scss";
import "./styles/home.scss";
import "./styles/sections.scss";

import Header from "./components/Header";
import Home from "./pages/Home";
import BorrowingCalPage from "./pages/BorrowingCalc";
import Navigation from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// note: Navbar import from react-bootstrap unused in this file

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navigation />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<BorrowingCalPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
