import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import AboutImage from "../assets/night.jpg";
import SecFooter from "../components/SecFooter/SecFooter";
import AboutUs from "../components/AboutUs/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="tacs-mid-background"
        backgroundImg={AboutImage}
        title="About"
        url="/about"
        btnclass="hide"
      />
      <AboutUs />
      <SecFooter />
    </>
  );
}

export default About;
