import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import BackgroundImage from "../assets/1.jpg";
import Destination from "../components/Destination/Destination";
import SectionServices from "../components/services/SectionServices";
import SecFooter from "../components/SecFooter/SecFooter";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="tacs-background"
        backgroundImg={BackgroundImage}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        url="/"
        btnclass="show"
        buttonText="Travel Plan"
      />
      <Destination />
      <SectionServices />
      <SecFooter />
    </>
  );
}

export default Home;
