import {
  Header,
  Hero,
  Service,
  Testimonies,
  Project,
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
      <div className="container mx-auto px-8 md:px-32 bg-gradient-to-r from-zinc-800 to-zinc-950 min-h-screen max-w-full">
        <Header />
        <Hero />
        <Service />
        <Project />
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
