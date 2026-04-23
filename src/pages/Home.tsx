import React from "react";
import HeroPage from "../components/templates/hero/Hero";
import ProcessSection from "../components/templates/process/ProcessSection";
import ValueSection from "../components/templates/process/ValueSection";
import VisualWardrobe from "../components/templates/process/VisualArchive";

const Home = () => {
  return (
    <div>
      {/* Hero doesn't usually need an ID unless you want to scroll back up */}
      <HeroPage />

      {/* Added ID for "About Us" scroll */}
      <section id="about">
        <ProcessSection />
      </section>

      {/* Added ID for "FAQs" scroll (visualwardrobe) */}
      <section id="faq">
        <VisualWardrobe />
      </section>

      {/* Added ID for "Catalogues" scroll */}
      <section id="catalogues">
        <ValueSection />
      </section>
    </div>
  );
};

export default Home;
