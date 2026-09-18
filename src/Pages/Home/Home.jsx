
import Hero from "../Hero/Hero";
import Stats from "../Stats/Stats";
import Services from "../Services/Services";
import About from "../About/About";
import Whyus from "../../components/Whyus/Whyus";
import Testimonials from "../../components/Testimonials/Testimonials";
import Contact from "../Contact/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <About />
      <Whyus />
      <Testimonials />
      <Contact />
    </>
  );
}

export default Home;