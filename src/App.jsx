import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/templates/navbar/Navbar";
import FooterSection from "./components/templates/footer/Footer";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"; // Import the 404 page we just created

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar stays at the top on all pages */}
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* The Main Landing Page */}
            <Route path="/" element={<Home />} />

            {/* The 404 Page - This catches any URL that doesn't exist */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer stays at the bottom on all pages */}
        <FooterSection />
      </div>
    </Router>
  );
};

export default App;
