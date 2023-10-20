import { Hero, Contact, Footer, ScrollToTop } from "./components/Index";

const App = () => {
  return (
    <>
      <div
        className="container mx-auto px-8 md:px-32 bg-gradient-to-r from-zinc-800 to-zinc-950 min-h-screen max-w-full"
        style={{ zIndex: 2 }} // Set z-index to 1 for the main container
      >
        <Hero />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default App;
