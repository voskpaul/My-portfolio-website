import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      {/* Background Gradient */}
      <div className="fixed -z-10 min-h-screen w-full 
        [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      </div>

      <main className="flex flex-col items-center justify-start px-4 md:px-8 lg:px-16 min-h-screen">
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Contacts />
      </main>
    </>
  );
}

export default App;
