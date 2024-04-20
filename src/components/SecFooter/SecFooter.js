import "./SecFooter.css";

function SecFooter() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>TACS</h1>
          <p>Choose your favourita plan.</p>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/ahmed-mahmoud-0461a6213/"
            target="blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/AhmedMahmoud962" target="blank">
            <i className="fa-brands fa-square-github"></i>
          </a>
          <a href="https://wa.me/01033993202" target="blank">
            <i className="fa-brands fa-square-whatsapp"></i>
          </a>
          <a href="https://portfolio-ahmedmahmoud.netlify.app/" target="blank">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="https://github.com/AhmedMahmoud962" target="blank">
            Github
          </a>
          <a href="https://wa.me/01033993202" target="blank">
            Issues
          </a>
          <a href="https://portfolio-ahmedmahmoud.netlify.app/" target="blank">
            Projects
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-mahmoud-0461a6213/"
            target="blank"
          >
            Linked In
          </a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
          {/* <a href="/">All Versions</a> */}
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
}

export default SecFooter;
