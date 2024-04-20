import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import ContactImage from "../assets/contact-bg.jpg";
import SecFooter from "../components/SecFooter/SecFooter";
import ContactUs from "../components/ContactUs/ContactUs";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="tacs-mid-background"
        backgroundImg={ContactImage}
        title="Contact"
        url="/contact"
        btnclass="hide"
      />
      <ContactUs />
      <SecFooter />
    </>
  );
}

export default Contact;
