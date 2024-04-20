import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="form-container">
      <h1>Send a message for us ! </h1>
      <form>
        <input type="text" name="Name" placeholder="Enter Your Name" />
        <input type="text" name="Email" placeholder="Enter Your Email" />
        <input type="text" name="Subject" placeholder="Enter Your Subject" />
        <textarea
          name="Message"
          placeholder="Enter Your Message"
          rows="4"
        ></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
