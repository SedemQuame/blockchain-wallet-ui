import { Link } from "react-router-dom";
import GreenSquareLogo from "./../../Assets/images/project.png";

function Footer() {
  return (
    <>
      <footer className="text-lg-start bg-dark text-muted text-center">
        <section className="d-flex justify-content-center justify-content-lg-between border-bottom p-4">
          <div className="text-md-start container mt-5 text-center">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <img
                  src={GreenSquareLogo}
                  alt="Green Square Logo"
                  style={{ height: "100px" }}
                />
                <p>
                  35 Green Street,
                  <br />
                  Accra, Ghana
                  <br />
                  +233 (0) 302 345 678
                  <br />
                  info@greensquare.com
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h5 className="text-captialise fw-bold text-success mb-4">
                  Job Seekers
                </h5>
                <p>
                  <Link to="/" className="text-reset">
                    Search Jobs
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Browse Jobs
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Find a Job
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    FAQs
                  </Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h5 className="text-captialise fw-bold text-success mb-4">
                  Useful links
                </h5>
                <p>
                  <Link to="/" className="text-reset">
                    Post a Job
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Search Resumes
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    How it Works
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Support
                  </Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-3 col-xl-3 mb-md-0 mx-auto mb-4">
                <h5 className="text-captialise fw-bold text-success mb-4">
                  Contact
                </h5>
                <p>
                  <Link to="/" className="text-reset">
                    About Us
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Careers
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Contact Us
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Partner with Us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
