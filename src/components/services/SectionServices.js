import "./SectionServices.css";
import ServicesData from "./ServicesData";
import imagecard1 from "../../assets/6.jpg";
import imagecard2 from "../../assets/8.jpg";
import imagecard3 from "../../assets/5.jpg";
function SectionServices() {
  return (
    <>
      <div className="sec-service">
        <h1 style={{ textAlign: "center" }}>Our Services</h1>
        <p style={{ textAlign: "center" }}>
          You can discover unique destination using Google Maps.
        </p>
        <div className="cards">
          <ServicesData
            image={imagecard1}
            heading="Trip in London"
            text="Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit
          Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit"
          />
          <ServicesData
            image={imagecard2}
            heading="Trip in France"
            text="Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit
          Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit"
          />
          <ServicesData
            image={imagecard3}
            heading="Trip in indonesia"
            text="Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit
          Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit"
          />
        </div>
      </div>
    </>
  );
}

export default SectionServices;
