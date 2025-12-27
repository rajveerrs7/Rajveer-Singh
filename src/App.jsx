import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import DotGrid from "./components/OGLBackground";
import GradualBlur from "./ui_components/GradualBlur"
import Resume from "./components/Resume";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-neutral-200 antialiased">

      {/* OGL Canvas */}
      <div className="fixed inset-0">
        <DotGrid
          dotSize={7}
          gap={15}
          baseColor="rgba(30, 19, 19, 0.25)"
          activeColor="#8b5cf6"
          proximity={120}
          shockRadius={130}
          shockStrength={8}
          resistance={900}
          returnDuration={1.8}
        />
      </div>

      {/* Dark base */}
      <div className="fixed inset-0 -z-5 bg-gradient-to-br from-[#0b0616] via-[#0f0820] to-black" />

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Resume />
        <Projects />
        <Contact />
      </div>
        <GradualBlur
        target="page"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />

    </div>
  );
}

export default App;
