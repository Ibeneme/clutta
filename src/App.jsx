import React from "react";
import Navbar from "./components/templates/navbar/Navbar";
import Home from "./pages/Home";
import FooterSection from "./components/templates/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <FooterSection />
    </div>
  );
};

export default App;
