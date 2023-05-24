import React from "react";
import {
  Header,
  Hero,
  Service,
  Testimonies,
  Project,
  Blog,
  Technologies,
  Contact,
  Footer,
  ScrollToTop,
} from "./components/Index";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const App = () => {
  return (
    <>
      <div className="container mx-auto px-8 md:px-32 bg-gradient-to-r from-slate-800 to-slate-950 min-h-screen max-w-full">
        <Header />
        <Hero />
        <Service />
        <Project />
        <Blog />
        <Technologies />
        {/* <Testimonies /> */}
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default App;
