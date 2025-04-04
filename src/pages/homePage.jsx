import Navbar from "../components/navbar";
import Section from "../components/section";
import { useRef } from "react";

const HomePage = () => {
  const containerRef = useRef(null);

  const scrollToSection = (index) => {
    const sectionWidth = containerRef.current.scrollWidth / 12;
    containerRef.current.scrollTo({
      left: sectionWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col h-screen w-screen">
      <Navbar scrollToSection={scrollToSection} />
      <div
        ref={containerRef}
        className="flex overflow-x-hidden scroll-smooth w-screen h-screen snap-x snap-mandatory"
        style={{ scrollBehavior: "smooth" }}
      >
        <Section id="1" title="Home" />
        <Section id="2" title="Manufacturer" />
        <Section id="3" title="Purpose" />
        <Section id="4" title="Service" />
        <Section id="5" title="Design" />
        <Section id="6" title="Specification" />
        <Section id="7" title="Crew" />
        <Section id="8" title="Capabilities" />
        <Section id="9" title="Performance" />
        <Section id="10" title="Operations" />
        <Section id="11" title="Summary" />
        <Section id="12" title="Sources" />
      </div>
    </div>
  );
};

export default HomePage;
