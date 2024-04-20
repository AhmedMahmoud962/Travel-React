import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import ServiceImage from "../assets/bg-hero.jpg";
import SecFooter from "../components/SecFooter/SecFooter";
import SectionServices from "../components/services/SectionServices";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="tacs-mid-background"
        backgroundImg={ServiceImage}
        title="Service"
        url="/service"
        btnclass="hide"
      />
      <SectionServices />
      <SecFooter />
    </>
  );
}

export default Service;
