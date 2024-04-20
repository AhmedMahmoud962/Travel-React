import "./Destination.css";
import DestinationData from "./DestinationData";
import img1 from "../../assets/8.jpg";
import img2 from "../../assets/4.jpg";
import img3 from "../../assets/5.jpg";
import img4 from "../../assets/3.jpg";
function Destination() {
  return (
    <>
      <div className="destination">
        <h1 style={{ textAlign: "center" }}>Popular Destination </h1>
        <p style={{ textAlign: "center" }}>
          Tours give you the opportunity to see a lot, within a time frames.
        </p>
        <DestinationData
          cName="first-des"
          heading="Taal Volcano, Batangas"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officia
          nihil voluptate quae dicta ullam veritatis quasi? Voluptatum nobis nam
          dolorem quae dolores! Dolorum atque beatae incidunt porro, in dolor
          nisi sint, optio pariatur perferendis, nostrum iure tempore sit.
          Doloremque vero ut pariatur quaerat ea omnis consectetur, unde
          repellat! Impedit vero aperiam a atque omnis pariatur velit quibusdam
          ut est fugiat dolores modi eaque maiores porro et deserunt quaerat,
          doloribus voluptatum corporis architecto nulla? Suscipit voluptas ex
          harum fuga nostrum accusantium unde iusto nulla quo magnam? Deserunt
          suscipit aut enim. In labore voluptate ex totam cum ad eligendi eos
          magnam?"
          image1={img1}
          image2={img2}
        />
        <DestinationData
          cName="first-des-reverse"
          heading="Enjoy Your Vacation With Us"
          text="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui officia
          nihil voluptate quae dicta ullam veritatis quasi? Voluptatum nobis nam
          dolorem quae dolores! Dolorum atque beatae incidunt porro, in dolor
          nisi sint, optio pariatur perferendis, nostrum iure tempore sit.
          Doloremque vero ut pariatur quaerat ea omnis consectetur, unde
          repellat! Impedit vero aperiam a atque omnis pariatur velit quibusdam
          ut est fugiat dolores modi eaque maiores porro et deserunt quaerat,
          doloribus voluptatum corporis architecto nulla? Suscipit voluptas ex
          harum fuga nostrum accusantium unde iusto nulla quo magnam? Deserunt
          suscipit aut enim. In labore voluptate ex totam cum ad eligendi eos
          magnam?"
          image1={img3}
          image2={img4}
        />
      </div>
    </>
  );
}

export default Destination;
